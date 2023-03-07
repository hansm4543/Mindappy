import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>Home Tab</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
