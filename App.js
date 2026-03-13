import * as Speech from "expo-speech";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [destination, setDestination] = useState("");

  const speak = (text) => {
    Speech.speak(text);
  };

  if (screen === "home") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>VisionPath</Text>
        <Text style={styles.subtitle}>Navigation for Visually Impaired</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("voice")}
        >
          <Text style={styles.buttonText}>Start Navigation</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === "voice") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Enter Destination</Text>

        <TextInput
          style={styles.input}
          placeholder="Food Court / Zara / Restroom"
          onChangeText={setDestination}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            speak("Navigating to " + destination);
            setScreen("map");
          }}
        >
          <Text style={styles.buttonText}>Navigate</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === "map") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Mall Navigation</Text>

        <Text style={styles.map}>
          Entrance → Corridor → Escalator → {destination}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            speak("Walk straight for ten meters then turn left");
            setScreen("camera");
          }}
        >
          <Text style={styles.buttonText}>Start Guidance</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === "camera") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Navigation Mode</Text>

        <Text style={styles.subtitle}>
          Walk Straight → Turn Left → Destination Ahead
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            speak("You have arrived at your destination");
            setScreen("arrived");
          }}
        >
          <Text style={styles.buttonText}>Simulate Arrival</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (screen === "arrived") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Destination Reached</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => setScreen("home")}
        >
          <Text style={styles.buttonText}>Go Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  title: {
    fontSize: 30,
    color: "#fff",
    marginBottom: 20,
  },

  subtitle: {
    color: "#ccc",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#4CAF50",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
  },

  input: {
    backgroundColor: "#fff",
    width: 250,
    padding: 12,
    borderRadius: 8,
  },

  map: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 20,
  },
});
