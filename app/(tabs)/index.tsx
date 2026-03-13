import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  const startNavigation = () => {
    Alert.alert(
      "Navigation Started",
      "Voice assistant guiding you to your destination",
    );
  };

  const detectObstacle = () => {
    Alert.alert("Camera Activated", "Scanning surroundings for obstacles");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VisionPath</Text>
      <Text style={styles.subtitle}>
        Indoor Navigation for Visually Impaired
      </Text>

      <TouchableOpacity style={styles.button} onPress={startNavigation}>
        <Text style={styles.buttonText}>Start Navigation</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={detectObstacle}>
        <Text style={styles.buttonText}>Scan for Obstacles</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
