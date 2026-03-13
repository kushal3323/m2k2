import { View, Text, Image, StyleSheet } from "react-native";

export default function Navigation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mall Navigation</Text>

      <Image
        source={{ uri: "https://i.imgur.com/6Iej2c3.png" }}
        style={styles.map}
      />

      <Text style={styles.voice}>
        Voice Guide: Walk straight for 20 meters
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
    fontSize: 28,
    color: "white",
    marginBottom: 20,
  },

  map: {
    width: 300,
    height: 300,
    borderRadius: 10,
  },

  voice: {
    marginTop: 20,
    color: "#aaa",
    fontSize: 16,
  },
});