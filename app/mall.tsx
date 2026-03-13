import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";
import * as Speech from "expo-speech";
import { useEffect, useState, useRef } from "react";

export default function MallScreen() {

  const router = useRouter();

  const [step, setStep] = useState(0);
  const [status, setStatus] = useState("Tap microphone to speak");

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Speech.speak("Welcome to GuideLight. Which mall would you like to navigate?");
  }, []);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 600,
          useNativeDriver: true
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true
        })
      ])
    ).start();
  };

  const handleVoice = () => {

    setStatus("Listening...");
    startAnimation();

    setTimeout(() => {

      if (step === 0) {

        setStatus("Forum Mall detected");

        Speech.speak("Forum Mall selected. Where would you like to go?");

        setStep(1);

      } else if (step === 1) {

        setStatus("Food Court detected");

        Speech.speak("Food court selected. Starting navigation. Please hold the phone forward.");

        setTimeout(() => {
          router.push("/camera");
        }, 3000);

      }

    }, 2000);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Voice Navigation</Text>

      <Text style={styles.subtitle}>
        Speak the mall name to begin navigation
      </Text>

      <Pressable onPress={handleVoice}>

        <Animated.View
          style={[
            styles.micButton,
            { transform: [{ scale: scaleAnim }] }
          ]}
        >
          <Text style={styles.micIcon}>🎤</Text>
        </Animated.View>

      </Pressable>

      <Text style={styles.status}>{status}</Text>

      <Text style={styles.hint}>
        Demo inputs:
        {"\n"}Forum Mall
        {"\n"}Food Court
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  title: {
    fontSize: 30,
    color: "white",
    marginBottom: 20
  },

  subtitle: {
    color: "#aaa",
    marginBottom: 40,
    textAlign: "center"
  },

  micButton: {
    width: 110,
    height: 110,
    borderRadius: 60,
    backgroundColor: "#3B82F6",
    justifyContent: "center",
    alignItems: "center"
  },

  micIcon: {
    fontSize: 42
  },

  status: {
    marginTop: 30,
    fontSize: 18,
    color: "white"
  },

  hint: {
    marginTop: 40,
    color: "#888",
    textAlign: "center"
  }

});