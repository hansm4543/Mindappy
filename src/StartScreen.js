import React from "react";
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { backgroundColor } from "./../constants";

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
        backgroundColor: backgroundColor,
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

      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          //backgroundColor: backgroundColor,
          height: 200,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={[styles.font]}>{englishMode ? "Language" : "Keel"}</Text>
          {/* <Button
          title={englishMode ? "English" : "Eesti"}
          onPress={() => changeLanguage()}
        /> */}
          <TouchableOpacity
            style={styles.buttonOutsideWhite}
            onPress={() => changeLanguage()}
          >
            <Text style={styles.buttonTextGray}>
              {englishMode ? "English" : "Eesti"}
            </Text>
          </TouchableOpacity>
        </View>
        {/* 
      <Button
        title={englishMode ? "Answered" : "Vastatud"}
        onPress={() => storeData("@answered", { value: false })}
      /> */}
        {/* <Button
        title={englishMode ? "Enter The Application" : "Sisenen rakendusse"}
        onPress={() => navigation.navigate("QuestionScreen")}
      /> */}
        <TouchableOpacity
          style={styles.buttonOutsideGray}
          onPress={() => navigation.navigate("QuestionScreen")}
        >
          <Text style={styles.buttonTextWhite}>
            {englishMode ? "Enter The Application" : "Sisenen rakendusse"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  font: {
    fontSize: 25,
    marginBottom: 5,
  },
  buttonOutsideGray: {
    alignItems: "center",
    backgroundColor: "#838383",
    padding: 10,
    width: 200,
    borderRadius: 10,
  },
  buttonTextWhite: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#FFF",
  },
  buttonOutsideWhite: {
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    width: 200,
    borderRadius: 10,
    borderColor: "#a9a9a9",
    borderWidth: 2,
  },
  buttonTextGray: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#838383",
  },
});
