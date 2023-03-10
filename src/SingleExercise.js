import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import ListView from "./ListView";

const ExerciseScreen = ({ exerciseData }) => {
  console.log(exerciseData);
  return (
    <View
    // style={{
    //   flex: 1,
    //   justifyContent: "center",
    //   alignItems: "center",
    //   backgroundColor: "lightblue",
    // }}
    >
      {exerciseData.map((exercise, i) => (
        <View key={i}>
          {exercise.type === "list" ? (
            <ListView listData={exercise.data}></ListView>
          ) : (
            <View style={{ flexDirection: "row" }}>
              <Text style={styles[exercise.fontWeight]}>{exercise.data}</Text>
              {/* <Text>{"\n"}</Text> */}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
  },
  normal: {
    fontSize: 16,
    flex: 1,
    flexWrap: "wrap",
  },
});
