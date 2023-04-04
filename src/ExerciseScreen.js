import {
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import { ExercisesList, ExercisesListEng } from "./../exerciseData";
import SingleExercise from "./SingleExercise";
import { backgroundColor } from "./../constants";

const ExerciseScreen = ({ navigation, route }) => {
  const englishMode = route?.params?.englishMode;

  const [exerciseIndex, setExerciseIndex] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: backgroundColor,
          marginHorizontal: 16,
          paddingVertical: 20,
        }}
      >
        <SingleExercise
          exerciseData={
            englishMode
              ? ExercisesListEng[exerciseIndex]
              : ExercisesList[exerciseIndex]
          }
        ></SingleExercise>
      </ScrollView>
      <View style={{ height: 100 }}>
        <View style={styles.fixToText}>
          {exerciseIndex === 0 ? (
            // <Button
            //   title={englishMode ? "Exit" : "Välju"}
            //   onPress={() => navigation.navigate("HomeTab")}
            // />
            <TouchableOpacity
              style={styles.buttonOutside}
              onPress={() => navigation.navigate("HomeTab")}
            >
              <Text style={styles.buttonText}>
                {englishMode ? "Exit" : "Välju"}
              </Text>
            </TouchableOpacity>
          ) : (
            // <Button
            //   title={englishMode ? "Go back" : "Eelmine"}
            //   onPress={() => setExerciseIndex(exerciseIndex - 1)}
            // />
            <TouchableOpacity
              style={styles.buttonOutside}
              onPress={() => setExerciseIndex(exerciseIndex - 1)}
            >
              <Text style={styles.buttonText}>
                {englishMode ? "Go back" : "Eelmine"}
              </Text>
            </TouchableOpacity>
          )}

          {exerciseIndex === ExercisesList.length - 1 ? (
            // <Button
            //   title={englishMode ? "Exit" : "Välju"}
            //   onPress={() => navigation.navigate("HomeTab")}
            // />
            <TouchableOpacity
              style={styles.buttonOutside}
              onPress={() => navigation.navigate("HomeTab")}
            >
              <Text style={styles.buttonText}>
                {englishMode ? "Exit" : "Välju"}
              </Text>
            </TouchableOpacity>
          ) : (
            // <Button
            //   title={englishMode ? "Go Next" : "Järgmine"}
            //   onPress={() => setExerciseIndex(exerciseIndex + 1)}
            // />
            <TouchableOpacity
              style={styles.buttonOutside}
              onPress={() => setExerciseIndex(exerciseIndex + 1)}
            >
              <Text style={styles.buttonText}>
                {englishMode ? "Go Next" : "Järgmine"}
              </Text>
            </TouchableOpacity>
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
    backgroundColor: backgroundColor,
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
  buttonOutside: {
    alignItems: "center",
    backgroundColor: "#838383",
    padding: 10,
    width: 100,
    borderRadius: 10,
    //borderColor: "#a9a9a9",
    //borderWidth: 2,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#FFF",
  },
});

export default ExerciseScreen;
