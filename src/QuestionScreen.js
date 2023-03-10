import React, { useState } from "react";
import {
  Button,
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";

function StartScreen({ navigation, route }) {
  const storeData = route?.params?.storeData;

  const questionsList = [
    "I recognize what I am feeling",
    "When I am overcome with strong emotions I know how to manage them",
    "question3",
    "question4",
    "I struggle to start working or studying without procrastinating",
    // "I struggle to start working or studying without procrastinating",
    // "I struggle to start working or studying without procrastinating",
    // "I struggle to start working or studying without procrastinating",
    // "I struggle to start working or studying without procrastinating",
    // "I struggle to start working or studying without procrastinating",
    // "I struggle to start working or studying without procrastinating",
  ];

  const answers = [
    { label: "Never", value: "never" },
    { label: "Sometimes", value: "sometimes" },
    { label: "Always", value: "always" },
  ];

  const [valueArr, setValue] = useState([null, null, null, null, null]);
  const [error, setError] = useState("");

  const setValueHandler = (value, i) => {
    const newArr = [...valueArr];
    newArr[i] = value;
    setValue(newArr);
  };

  const submit = () => {
    let counter = 0;
    for (let i = 0; i < valueArr.length; i++) {
      if (valueArr[i] !== null) {
        counter++;
      }
    }

    if (counter === valueArr.length) {
      //storeData("@answered", { answered: true });
      //storeData("@answers", { answered: true });
      navigation.navigate("Bottomtab");
    } else {
      setError("Fill in all the Fields");
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        {questionsList.map((questionData, i) => (
          <View
            style={
              i === questionsList.length - 1 ? styles.viewLast : styles.view
            }
            key={i}
          >
            <Text style={styles.text}>{questionData}</Text>
            <Dropdown
              style={[styles.dropdown]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              data={answers}
              maxHeight={200}
              labelField="label"
              valueField="value"
              placeholder={"..."}
              value={valueArr[i]}
              onChange={(item) => {
                setValueHandler(item.value, i);
              }}
            />
          </View>
        ))}

        <View style={styles.buttonView}>
          <Text style={styles.textError}>{error}</Text>

          <View
            style={[
              {
                width: "50%",
                height: "30%",
                alignSelf: "center",
              },
            ]}
          >
            <Button
              //color="#841584"
              title="Submit Answers"
              onPress={() => submit()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  scrollView: {
    marginBottom: 0,
    marginHorizontal: 20,
    paddingVertical: 20,
    textAlign: "center",
    borderRadius: 10,
  },
  dropdown: {
    height: 50,
    width: "90%",
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  view: {
    flex: 1,
    alignItems: "center",
    marginBottom: 30,
  },
  viewLast: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    width: "90%",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  textError: {
    //width: "100%",
    marginBottom: 10,
    fontSize: 20,
    color: "red",
    alignSelf: "center",
  },
  buttonView: {
    marginTop: 30,
    marginBottom: 30,
    width: "100%",
    // alignItems: "center",
    // textAlign: "center",
    // alignSelf: "center",
  },
});
