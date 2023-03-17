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
import {
  answersEng,
  answersEst,
  questionsListEng,
  questionsListEst,
} from "./../questionData";

function QuestionScreen({ navigation, route }) {
  const storeData = route?.params?.storeData;
  const englishMode = route?.params?.englishMode;
  const questionsAnswered = route?.params?.questionsAnswered;
  const setQuestionsAnswered = route?.params?.setQuestionsAnswered;

  //console.log("mees", questionsAnswered);

  const answers = englishMode ? answersEng : answersEst;

  const questionsList = englishMode ? questionsListEng : questionsListEst;

  const [valueArr, setValueArr] = useState([
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
    setValueArr(newArr);
  };

  const submit = () => {
    let counter = 0;
    for (let i = 0; i < valueArr.length; i++) {
      if (valueArr[i] !== null) {
        counter++;
      }
    }

    if (counter === valueArr.length) {
      let firstSection = 0;
      let secondSection = 0;
      let thirdSection = 0;
      let forthSection = 0;
      let fifthSection = 0;
      for (let i = 0; i < valueArr.length; i++) {
        switch (i) {
          case 0:
          case 1:
          case 2:
            firstSection = firstSection + parseInt(valueArr[i], 10);
            break;
          case 3:
          case 4:
          case 5:
            secondSection = secondSection + parseInt(valueArr[i], 10);
            break;
          case 6:
          case 7:
          case 8:
            thirdSection = thirdSection + parseInt(valueArr[i], 10);
            break;
          case 9:
          case 10:
          case 11:
            forthSection = forthSection + parseInt(valueArr[i], 10);
            break;
          case 12:
          case 13:
          case 14:
            fifthSection = fifthSection + parseInt(valueArr[i], 10);
            break;
          default:
            break;
        }
      }
      const object = {
        firstSection: {
          value: Math.round((firstSection / 15) * 100 * 100) / 100,
        },
        secondSection: {
          value: Math.round((secondSection / 15) * 100 * 100) / 100,
        },
        thirdSection: {
          value: Math.round((thirdSection / 15) * 100 * 100) / 100,
        },
        forthSection: {
          value: Math.round((forthSection / 15) * 100 * 100) / 100,
        },
        fifthSection: {
          value: Math.round((fifthSection / 15) * 100 * 100) / 100,
        },
      };
      //console.log(object);
      if (questionsAnswered) {
        storeData("@answersCurrent", object);
        //navigation.navigate("ResultScreen");
        navigation.reset({
          routes: [{ name: "ResultScreen" }],
        });
      } else {
        storeData("@answered", { value: true });
        storeData("@answersInitial", object);
        setQuestionsAnswered(true);
        navigation.navigate("Bottomtab");
      }
      setValueArr([
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
    } else {
      setError(
        englishMode ? "Fill in all the Fields" : "Palun täida kõik lüngad"
      );
    }
  };

  const getValueForHeading = (i, englishMode) => {
    let text;
    let boolean = false;
    switch (i) {
      case 0:
        text = englishMode ? "Self-awareness" : "Eneseteadvus";
        boolean = true;
        break;
      case 3:
        text = englishMode ? "Self-management" : "Enesejuhtimine";
        boolean = true;
        break;
      case 6:
        text = englishMode ? "Social awareness" : "Sotsiaalne teadlikkus";
        boolean = true;
        break;
      case 9:
        boolean = true;
        text = englishMode ? "Relationship skills" : "Suhteoskused";
        break;
      case 12:
        text = englishMode
          ? "Responsible decision making"
          : "Vastutustundlik otsuste tegemine";
        boolean = true;
        break;
      default:
        break;
      // code block
    }

    return [boolean, text];
  };

  //console.log(valueArr);

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
                <Text style={styles.textHeading}>
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
              maxHeight={300}
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
                marginBottom: 50,
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

export default QuestionScreen;

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
    fontSize: 14,
  },
  textHeading: {
    width: "100%",
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 20,
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
  },
});
