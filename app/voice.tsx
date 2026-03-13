import { View, Text, Pressable, StyleSheet } from "react-native";
import * as Speech from "expo-speech";

export default function VoiceScreen() {

  const speak = () => {
    Speech.speak("Navigating to the food court. Walk straight for twenty meters.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Voice Assistant</Text>

      <Pressable style={styles.button} onPress={speak}>
        <Text style={styles.buttonText}>Speak Destination</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#0B0F1A",
    justifyContent:"center",
    alignItems:"center"
  },

  title:{
    fontSize:28,
    color:"white",
    marginBottom:20
  },

  button:{
    backgroundColor:"#3B82F6",
    padding:16,
    borderRadius:10
  },

  buttonText:{
    color:"white",
    fontSize:18
  }
});