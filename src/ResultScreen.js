import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

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
  const data = {
    labels: ["Test1", "Test2"],
    legend: ["L1", "L2", "L3"],
    data: [
      [60, 60, 60],
      [30, 30, 60],
    ],
    barColors: ["#dfe4ea", "#ced6e0", "#a4b0be"],
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
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
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

          <StackedBarChart
            verticalLabelRotation={-60} //Degree to rotate
            horizontalLabelRotation={-60} //Degree to rotate
            xLabelsOffset={20}
            showLegend={0}
            withVerticalLabels={true}
            withHorizontalLabels={true}
            data={{
              labels: englishMode
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
                    "Vastutustundlikus",
                  ],
              //legend: ["L1", "L2", "L3"],
              data: [
                [10, 10, 80],
                [30, 30],
                [30, 30],
                [30, 30],
                [30, 30],
              ],
              barColors: ["#dfe4ea", "#ced6e0", "rgba(100, 100, 100, 0)"],
            }}
            width={Dimensions.get("window").width - 16}
            height={500}
            chartConfig={{
              propsForLabels: {
                style: {
                  opacity: 0,
                },
              },
              propsForHorizontalLabels: {
                style: {
                  opacity: 1,
                },
              },
              backgroundColor: "lightblue",
              backgroundGradientFrom: "lightblue",
              backgroundGradientTo: "lightblue",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
              propsForVerticalLabels: {
                style: {
                  opacity: 1,
                  fontWeight: "bold",
                  transform: [
                    { rotate: "-70deg" },
                    { translateY: "-10px" },
                    { translateX: "-20px" },
                  ],
                },
              },
              barRadius: 100,
            }}
            style={{
              marginVertical: 50,
              borderRadius: 16,
            }}
          />

          <Button
            title={englishMode ? "Go back" : "Tagasi"}
            onPress={() => navigation.navigate("HomeTab")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  scrollView: {
    marginBottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 20,
    textAlign: "center",
    borderRadius: 10,
  },
});
