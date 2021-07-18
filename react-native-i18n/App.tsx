import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "./i18n.config";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Button title="Press" onPress={() => console.log("Pressed")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 32,
  },
});
