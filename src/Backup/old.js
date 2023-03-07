import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [isHungry, setIsHungry] = useState(true);

  useEffect(() => {
    //setIsHungry(false);
  });

  if (isHungry) {
    return (
      <View style={styles.container}>
        <Text>Loading!</Text>
        <StatusBar style="auto" />
        <Button
          style={{ fontSize: 50, color: "green" }}
          onPress={() => setIsHungry(false)}
          title="Press Me"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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
});
