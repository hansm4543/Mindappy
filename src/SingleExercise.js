import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ListView from "./ListView";

const SingleExercise = ({ exerciseData }) => {
  return (
    <View>
      {exerciseData.map((exercise, i) => (
        <View key={i}>
          {exercise.type === "list" ? (
            <ListView listData={exercise.data}></ListView>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <Text style={styles[exercise.fontWeight]}>{exercise.data}</Text>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default SingleExercise;

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    fontSize: 20,
    flex: 1,
    flexWrap: "wrap",
    color: "white",
  },
  normal: {
    fontSize: 18,
    flex: 1,
    flexWrap: "wrap",
    color: "white",
  },
});
