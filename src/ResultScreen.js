import { StyleSheet, Text, View, Button, Dimensions } from "react-native";
import React, { useState, useEffect, useRef } from "react";
// import RNEChartsPro from "react-native-echarts-pro";

const ResultScreen = ({ navigation, route }) => {
  const getData = route?.params?.getData;
  const englishMode = route?.params?.englishMode;

  const [isLoading, setIsLoading] = useState(true);
  const [answersInitial, setAnswersInitial] = useState({
    firstSection: {
      value: 5,
    },
    secondSection: {
      value: 5,
    },
    thirdSection: {
      value: 5,
    },
    forthSection: {
      value: 5,
    },
    fifthSection: {
      value: 5,
    },
  });
  const [answersCurrent, setAnswersCurrent] = useState(undefined);

  useEffect(() => {
    if (isLoading) {
      const fetchData = async () => {
        // get the data from the api
        const answeredInitialValue = await getData("@answersInitial");
        // set state with the result
        if (answeredInitialValue !== null) {
          setAnswersInitial(answeredInitialValue);
        }
        const answeredCurrentValue = await getData("@answersCurrent");
        if (answeredCurrentValue !== null) {
          setAnswersCurrent(answeredCurrentValue);
        }
        setIsLoading(false);
      };

      // call the function
      fetchData()
        // make sure to catch any error
        .catch(console.error);
    }
  }, [isLoading]); // Only re-run the effect if [in brackets] changes

  const option = {
    tooltip: false,
    legend: {},
    grid: {
      left: "10%",
      right: "10%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        axisLabel: {
          rotate: 60,
          fontWeight: "bold",
        },
        data: englishMode
          ? [
              "Self-awareness",
              "Self-management",
              "Social awareness",
              "Relationship skills",
              "Responsible decision making",
            ]
          : [
              "Eneseteadvus",
              "Enesejuhtimine",
              "Sotsiaalne teadlikkus",
              "Suhteoskused",
              "Vastutustundlik otsuste tegemine",
            ],
      },
    ],
    yAxis: [
      {
        type: "value",
        max: 100,
        splitNumber: 10,
      },
    ],
    series:
      answersCurrent !== undefined
        ? [
            {
              name: englishMode ? "Initial" : "Esialgne",
              type: "bar",
              stack: "Ad",
              data: [
                answersInitial.firstSection.value,
                answersInitial.secondSection.value,
                answersInitial.thirdSection.value,
                answersInitial.forthSection.value,
                answersInitial.fifthSection.value,
              ],
            },
            {
              name: englishMode ? "Current" : "Hetkel",
              type: "bar",
              stack: "Ad",
              data: [
                isLoading
                  ? answersCurrent.firstSection.value
                  : answersCurrent.firstSection.value -
                    answersInitial.firstSection.value,
                isLoading
                  ? answersCurrent.secondSection.value
                  : answersCurrent.secondSection.value -
                    answersInitial.secondSection.value,
                isLoading
                  ? answersCurrent.thirdSection.value
                  : answersCurrent.thirdSection.value -
                    answersInitial.thirdSection.value,
                isLoading
                  ? answersCurrent.forthSection.value
                  : answersCurrent.forthSection.value -
                    answersInitial.forthSection.value,
                isLoading
                  ? answersCurrent.fifthSection.value
                  : answersCurrent.fifthSection.value -
                    answersInitial.fifthSection.value,
              ],
            },
          ]
        : [
            {
              name: englishMode ? "Initial" : "Esialgne",
              type: "bar",
              stack: "Ad",
              data: [
                answersInitial.firstSection.value,
                answersInitial.secondSection.value,
                answersInitial.thirdSection.value,
                answersInitial.forthSection.value,
                answersInitial.fifthSection.value,
              ],
            },
          ],
  };

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
        }}
      ></View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "lightblue",
        paddingBottom: 20,
      }}
    >
      <Button
        title={
          englishMode ? "Take assessment again" : "Tee taseme testi uuesti"
        }
        onPress={() => navigation.navigate("QuestionScreen")}
      />

      {/* <RNEChartsPro height={400} with={300} option={option} /> */}
      <Button
        title={englishMode ? "Go back" : "Tagasi"}
        onPress={() => navigation.navigate("HomeTab")}
      />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({});
