import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GuideLight</Text>

      <Text style={styles.subtitle}>
        Indoor Navigation for Visually Impaired
      </Text>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/navigation")}
      >
        <Text style={styles.buttonText}>Start Navigation</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/camera")}
      >
        <Text style={styles.buttonText}>Scan Surroundings</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => router.push("/voice")}
      >
        <Text style={styles.buttonText}>Voice Assistant</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },

  subtitle: {
    color: "#aaa",
    fontSize: 16,
    marginBottom: 40,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#3B82F6",
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginVertical: 12,
    width: "80%",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
});