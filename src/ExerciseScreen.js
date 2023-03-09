import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ExerciseScreen = ({ navigation, route }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>ExerciseScreen Tab</Text>

      <Button title="Go back" onPress={() => navigation.navigate("HomeTab")} />
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({});
