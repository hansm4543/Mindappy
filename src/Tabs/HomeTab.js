import { StyleSheet, View, Button } from "react-native";
import React from "react";

const Home = ({ navigation, route }) => {
  const englishMode = route?.params?.englishMode;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lightblue",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "lightblue",
          marginVertical: "30%",
        }}
      >
        <Button
          title={englishMode ? "Go to Exercises" : "Liigu harjutama"}
          onPress={() => navigation.navigate("ExerciseScreen")}
        />

        <Button
          title={englishMode ? "See Results" : "Vaata tulemusi"}
          onPress={() => navigation.navigate("ResultScreen")}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
