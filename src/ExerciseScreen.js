import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { ExercisesList } from "./../exerciseData";
import SingleExercise from "./SingleExercise";

const ExerciseScreen = ({ navigation, route }) => {
  const englishMode = route?.params?.englishMode;

  const [exerciseIndex, setExerciseIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "lightblue",
          marginHorizontal: 16,
          paddingVertical: 20,
        }}
      >
        <SingleExercise
          exerciseData={ExercisesList[exerciseIndex]}
        ></SingleExercise>
      </ScrollView>
      <View style={{ height: 100 }}>
        <View style={styles.fixToText}>
          {exerciseIndex === 0 ? (
            <Button
              title={englishMode ? "Exit" : "Välju"}
              onPress={() => navigation.navigate("HomeTab")}
            />
          ) : (
            <Button
              title={englishMode ? "Go back" : "Eelmine"}
              onPress={() => setExerciseIndex(exerciseIndex - 1)}
            />
          )}

          {exerciseIndex === ExercisesList.length - 1 ? (
            <Button
              title={englishMode ? "Exit" : "Välju"}
              onPress={() => navigation.navigate("HomeTab")}
            />
          ) : (
            <Button
              title={englishMode ? "Go Next" : "Järgmine"}
              onPress={() => setExerciseIndex(exerciseIndex + 1)}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    marginTop: 30,
    width: "60%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ExerciseScreen;
