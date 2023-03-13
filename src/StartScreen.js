import React from "react";
import { Button, View, Image, Text, BackHandler } from "react-native";
import { useState, useEffect, useRef } from "react";

function StartScreen({ navigation, route }) {
  const englishMode = route?.params?.englishMode;

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "lightblue",
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          height: 130,
          alignItems: "center",
          marginBottom: 200,
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

      <Button
        title={englishMode ? "Enter The Application" : "Sisenen rakendusse"}
        onPress={() => navigation.navigate("QuestionScreen")}
      />
    </View>
  );
}

export default StartScreen;
