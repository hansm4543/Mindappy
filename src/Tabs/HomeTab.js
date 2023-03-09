import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation, route }) => {
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
      <Text>{"\n"}</Text>

      <Button
        title="Go to Exercises"
        onPress={() => navigation.navigate("ExerciseScreen")}
      />
      <Text>{"\n"}</Text>

      <Button
        title="See Results"
        onPress={() => navigation.navigate("ResultScreen")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
