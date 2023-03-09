import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import { ExercisesList } from "./../exerciseData";
import SingleExercise from "./SingleExercise";

const ExerciseScreen = ({ navigation, route }) => {
  const [exerciseIndex, setExerciseIndex] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <SingleExercise
        exerciseData={ExercisesList[exerciseIndex]}
      ></SingleExercise>

      {exerciseIndex === 0 ? (
        <Button title="Exit" onPress={() => navigation.navigate("HomeTab")} />
      ) : (
        <Button
          title="Go back"
          onPress={() => setExerciseIndex(exerciseIndex - 1)}
        />
      )}

      {exerciseIndex === ExercisesList.length - 1 ? (
        <Button title="Exit" onPress={() => navigation.navigate("HomeTab")} />
      ) : (
        <Button
          title="Go Next"
          onPress={() => setExerciseIndex(exerciseIndex + 1)}
        />
      )}
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({});
