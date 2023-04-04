import { StyleSheet, View, Button, TouchableOpacity, Text } from "react-native";
import React from "react";
import { backgroundColor } from "./../../constants";

const Home = ({ navigation, route }) => {
  const englishMode = route?.params?.englishMode;

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        paddingVertical: "20%",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: backgroundColor,
        }}
      >
        <Text style={styles.buttonText}>
          {englishMode
            ? "Time to start practicing"
            : "Aeg alustada harjutamist"}
        </Text>
        {/* <Button
          title={englishMode ? "Go to Exercises" : "Liigu harjutama"}
          onPress={() => navigation.navigate("ExerciseScreen")}
        />

        <Button
          title={englishMode ? "See Results" : "Vaata tulemusi"}
          onPress={() => navigation.navigate("ResultScreen")}
        /> */}
        <TouchableOpacity
          style={styles.buttonOutside}
          onPress={() => navigation.navigate("ExerciseScreen")}
        >
          <Text style={styles.buttonText}>
            {englishMode ? "Go to Exercises" : "Liigu harjutama"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOutside}
          onPress={() => navigation.navigate("ResultScreen")}
        >
          <Text style={styles.buttonText}>
            {englishMode ? "See Results" : "Vaata tulemusi"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  buttonOutside: {
    alignItems: "center",
    backgroundColor: "#838383",
    padding: 10,
    width: 200,
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
