import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Divider } from "@rneui/themed";
import SingleQuestion from "./SingleQuestion";

function StartScreen({ navigation, route }) {
  const storeData = route?.params?.storeData;
  const englishMode = route?.params?.englishMode;

  const answers = [
    [
      { label: "Never", value: "never" },
      { label: "Rarely", value: "rarely" },
      { label: "Sometimes", value: "sometimes" },
      { label: "Often", value: "often" },
      { label: "Always", value: "always" },
    ],
    [
      { label: "Strongly disagree", value: "strongly disagree" },
      { label: "Disagree", value: "disagree" },
      { label: "Neither agree nor disagree", value: "neither" },
      { label: "Agree", value: "agree" },
      { label: "Strongly agree", value: "strongly agree" },
    ],
    [
      { label: "Poor", value: "poor" },
      { label: "Fair", value: "fair" },
      { label: "Good", value: "good" },
      { label: "Very good", value: "very good" },
      { label: "Excellent", value: "excellent" },
    ],
  ];

  const questionsList = [
    ["I recognize what emotion I am currently feeling.", 0],
    [
      "When I am experiencing uncomfortable emotions simply because I am tired, hungry, or sick, I am aware of this being the root cause of how I feel.",
      0,
    ],
    [
      "When I experience strong emotions, I know which of my values and thoughts are triggering it.",
      0,
    ],
    [
      "When I am overcome with strong uncomfortable emotions, I know what to do to make myself feel better.",
      1,
    ],
    [
      "If I need to get something done, I can resist distractions and focus on the important.",
      0,
    ],
    ["When I set myself a goal, I don’t easily give up working towards it.", 1],
    ["I notice when someone in the group is left out.", 0],
    ["When I see someone suffering, I feel empathy for them.", 0],
    [
      "When I meet people from backgrounds different from mine, I notice and appreciate those differences.",
      1,
    ],
    [
      "My ability to express my concerns about someone’s behavior without blaming them are",
      2,
    ],
    [
      "It is easy for me to understand what other people are feeling based on their body language and the situation.",
      1,
    ],
    ["It is easy for me to cooperate with different people.", 1],
    ["When making decisions, I consider the wider impact of my decisions.", 0],
    [
      "When I have a problem, it is easy for me to identify the steps I need to take to solve it.",
      1,
    ],
    ["I am aware of how my actions impacts people around me.", 0],
  ];

  const [valueArr, setValue] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
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
      //storeData("@answered", { value: true })
      //storeData("@answers", { });
      navigation.navigate("Bottomtab");
    } else {
      setError("Fill in all the Fields");
    }
  };

  const getValueForHeading = (i, englishMode) => {
    let text;
    let boolean = false;
    switch (i) {
      case 0:
        text = "Self-awareness";
        boolean = true;
        break;
      case 3:
        text = "Self-management";
        boolean = true;
        break;
      case 6:
        text = "Social awareness";
        boolean = true;
        break;
      case 9:
        boolean = true;
        text = "Relationship skills";
        break;
      case 12:
        text = "Responsible decision making";
        boolean = true;
        break;
      default:
        break;
      // code block
    }

    return [boolean, text];
  };

  console.log(valueArr);

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
            {getValueForHeading(i, englishMode)[0] && (
              <View style={{ alignSelf: "center", marginTop: 40 }}>
                <Text style={styles.text}>
                  {getValueForHeading(i, englishMode)[1]}
                </Text>
              </View>
            )}
            {getValueForHeading(i, englishMode)[0] && (
              <Divider
                style={{ width: "100%", marginBottom: 20 }}
                color="#2089dc"
                insetType="left"
                width={1}
                orientation="horizontal"
              />
            )}

            <Text style={styles.text}>{questionData[0]}</Text>
            <Dropdown
              style={[styles.dropdown]}
              data={answers[questionData[1]]}
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
              title={englishMode ? "Submit Answers" : "Lõpetan küsimustiku"}
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
    justifyContent: "space-evenly",
    marginBottom: 50,
  },
  viewFirst: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 50,
    marginTop: 20,
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
