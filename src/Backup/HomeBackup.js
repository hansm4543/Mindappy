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
      <Button
        title="Enter The Application"
        onPress={() => navigation.navigate("StartScreen")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
