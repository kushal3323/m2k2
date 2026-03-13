import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/mall");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>GuideLight</Text>

      <Text style={styles.subtitle}>
        Smart Indoor Navigation for Visually Impaired
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
  },

  title: {
    fontSize: 42,
    color: "white",
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: "#aaa",
    textAlign: "center",
  },
});