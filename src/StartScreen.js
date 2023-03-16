import React from "react";
import {
  Button,
  View,
  Image,
  Text,
  BackHandler,
  StyleSheet,
} from "react-native";
import { useState, useEffect, useRef } from "react";

function StartScreen({ navigation, route }) {
  const englishMode = route?.params?.englishMode;
  const setEnglishMode = route?.params?.setEnglishMode;
  const storeData = route?.params?.storeData;

  const changeLanguage = () => {
    storeData("@englishMode", { value: englishMode ? false : true });
    setEnglishMode(englishMode ? false : true);

    navigation.reset({
      index: 0,
      routes: [{ name: "StartScreen" }],
    });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "lightblue",
        width: "100%",
        height: "100%",
        paddingBottom: 100,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 130,
          alignItems: "center",
          marginBottom: 50,
          marginTop: 200,
        }}
      >
        <View
          style={{
            width: 300,
            height: 100,
            marginTop: 15,
          }}
        >
          <Image
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
            }}
            source={require("./../Mindappy.png")}
          />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={[styles.font]}>{englishMode ? "Language" : "Keel"}</Text>
        <Button
          title={englishMode ? "English" : "Eesti"}
          onPress={() => changeLanguage()}
        />
      </View>
      {/* 
      <Button
        title={englishMode ? "Answered" : "Vastatud"}
        onPress={() => storeData("@answered", { value: false })}
      /> */}
      <Button
        title={englishMode ? "Enter The Application" : "Sisenen rakendusse"}
        onPress={() => navigation.navigate("QuestionScreen")}
      />
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  font: {
    fontSize: 25,
    marginBottom: 5,
  },
});
