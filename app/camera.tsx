import { View, Text, StyleSheet, Pressable } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Speech from "expo-speech";
import { useEffect, useState } from "react";

export default function CameraScreen() {

  const [permission, requestPermission] = useCameraPermissions();
  const [message, setMessage] = useState("Starting navigation...");
  const [sosActive, setSosActive] = useState(false);

  useEffect(() => {
    if (!permission?.granted) {
      requestPermission();
    }
  }, []);

  useEffect(() => {

    const steps = [
      "Starting navigation to food court",
      "Walk forward ten meters",
      "Turn left",
      "Obstacle detected ahead. Please slow down",
      "Walk forward five meters",
      "Destination reached. You may stop navigation"
    ];

    let index = 0;

    const interval = setInterval(() => {

      if (index >= steps.length || sosActive) {
        clearInterval(interval);
        return;
      }

      const step = steps[index];

      setMessage(step);
      Speech.speak(step);

      index++;

    }, 5000);

    return () => clearInterval(interval);

  }, [sosActive]);

  const triggerSOS = () => {

    setSosActive(true);

    setMessage("SOS ALERT SENT");

    Speech.speak(
      "Emergency detected. Sending alert to emergency contact and nearby mall staff."
    );
  };

  if (!permission) return <View />;

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Camera permission required</Text>
      </View>
    );
  }

  return (

    <Pressable
      style={{flex:1}}
      onLongPress={triggerSOS}
    >

      <View style={styles.container}>

        <CameraView style={styles.camera} />

        <View style={styles.overlay}>

          <Text style={styles.warning}>
            {sosActive ? "🚨 EMERGENCY ALERT" : "Navigation Guidance"}
          </Text>

          <Text style={styles.message}>
            {message}
          </Text>

          <Text style={styles.info}>
            (Long press anywhere for SOS)
          </Text>

        </View>

      </View>

    </Pressable>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"black"
  },

  camera:{
    flex:1
  },

  overlay:{
    position:"absolute",
    bottom:120,
    alignSelf:"center",
    backgroundColor:"rgba(0,0,0,0.7)",
    padding:20,
    borderRadius:10,
    width:"85%"
  },

  warning:{
    color:"#3B82F6",
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10,
    textAlign:"center"
  },

  message:{
    color:"white",
    fontSize:18,
    textAlign:"center"
  },

  info:{
    color:"#aaa",
    fontSize:12,
    marginTop:10,
    textAlign:"center"
  },

  text:{
    color:"white",
    marginTop:50,
    textAlign:"center"
  }

});