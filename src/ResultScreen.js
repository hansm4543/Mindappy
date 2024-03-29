import {
  StyleSheet,
  View,
  Button,
  Dimensions,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState, useEffect } from "react";
import { StackedBarChart } from "react-native-chart-kit";
import { backgroundColor } from "./../constants";

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

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: backgroundColor,
        }}
      ></View>
    );
  }

  // console.log(answersInitial);
  // console.log(answersCurrent);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: backgroundColor,
            paddingBottom: 100,
            paddingTop: 50,
          }}
        >
          {/* <Button
            title={
              englishMode ? "Take assessment again" : "Tee taseme testi uuesti"
            }
            //onPress={() => navigation.navigate("QuestionScreen")}
            onPress={() =>
              navigation.reset({
                routes: [{ name: "QuestionScreen" }],
              })
            }
          /> */}
          <TouchableOpacity
            style={styles.buttonOutside}
            onPress={() =>
              navigation.reset({
                routes: [{ name: "QuestionScreen" }],
              })
            }
          >
            <Text style={styles.buttonText}>
              {englishMode
                ? "Take assessment again"
                : "Tee taseme testi uuesti"}
            </Text>
          </TouchableOpacity>

          <View
            style={{
              //flex: 1,
              //alignItems: "center",
              //justifyContent: "space-evenly",
              //height: 150,
              marginTop: 75,
              marginBottom: 75,
              borderColor: "white",
              borderRadius: 50,
              backgroundColor: "white",
              width: Dimensions.get("window").width - 30,
              height: 700,
            }}
          >
            <StackedBarChart
              //verticalLabelRotation={-60} //Degree to rotate
              //horizontalLabelRotation={-60} //Degree to rotate
              //xLabelsOffset={20}
              //showLegend={0}
              withVerticalLabels={true}
              withHorizontalLabels={true}
              data={{
                labels: englishMode
                  ? [
                      "Self-awareness",
                      "Self-management",
                      "Social awareness",
                      "Relationship skills",
                      "Responsibility",
                    ]
                  : [
                      "Eneseteadvus",
                      "Enesejuhtimine",
                      "Sotsiaalne teadlikkus",
                      "Suhteoskused",
                      "Vastutustundlikus",
                    ],
                //legend: ["L1", "L2", "L3"],
                // data: [
                //   [10, 10, 80],
                //   [30, 30],
                //   [30, 30],
                //   [30, 30],
                //   [30, 30],
                // ],

                data:
                  answersCurrent !== undefined
                    ? [
                        [
                          answersInitial.firstSection.value,
                          answersCurrent.firstSection.value -
                            answersInitial.firstSection.value,
                          100 -
                            answersInitial.firstSection.value -
                            (answersCurrent.firstSection.value -
                              answersInitial.firstSection.value),
                        ],
                        [
                          answersInitial.secondSection.value,
                          answersCurrent.secondSection.value -
                            answersInitial.secondSection.value,
                          100 -
                            answersInitial.secondSection.value -
                            (answersCurrent.secondSection.value -
                              answersInitial.secondSection.value),
                        ],
                        [
                          answersInitial.thirdSection.value,
                          answersCurrent.thirdSection.value -
                            answersInitial.thirdSection.value,
                          100 -
                            answersInitial.thirdSection.value -
                            (answersCurrent.thirdSection.value -
                              answersInitial.thirdSection.value),
                        ],
                        [
                          answersInitial.forthSection.value,
                          answersCurrent.forthSection.value -
                            answersInitial.forthSection.value,
                          100 -
                            answersInitial.forthSection.value -
                            (answersCurrent.forthSection.value -
                              answersInitial.forthSection.value),
                        ],
                        [
                          answersInitial.fifthSection.value,
                          answersCurrent.fifthSection.value -
                            answersInitial.fifthSection.value,
                          100 -
                            answersInitial.fifthSection.value -
                            (answersCurrent.fifthSection.value -
                              answersInitial.fifthSection.value),
                        ],
                      ]
                    : [
                        [
                          answersInitial.firstSection.value,
                          100 - answersInitial.firstSection.value,
                        ],
                        [
                          answersInitial.secondSection.value,
                          100 - answersInitial.secondSection.value,
                        ],
                        [
                          answersInitial.thirdSection.value,
                          100 - answersInitial.thirdSection.value,
                        ],
                        [
                          answersInitial.forthSection.value,
                          100 - answersInitial.forthSection.value,
                        ],
                        [
                          answersInitial.fifthSection.value,
                          100 - answersInitial.fifthSection.value,
                        ],
                      ],
                barColors:
                  answersCurrent !== undefined
                    ? ["lightblue", "lightgreen", "rgba(100, 100, 100, 0)"]
                    : ["lightblue", "rgba(100, 100, 100, 0)"],
              }}
              width={Dimensions.get("window").width - 80}
              height={600}
              chartConfig={{
                propsForLabels: {
                  style: {
                    opacity: 0,
                  },
                },
                propsForHorizontalLabels: {
                  style: {
                    opacity: 1,
                    fontWeight: "bold",
                  },
                },
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForVerticalLabels: {
                  rotation: -45,
                  translateX: -30,
                  translateY: 20,
                  style: {
                    opacity: 1,
                    fontWeight: "bold",
                  },
                },
                // barRadius: 100,
              }}
              style={{
                //marginVertical: 50,
                //paddingHorizontal: 10,
                paddingTop: 50,
                paddingLeft: 20,
                borderRadius: 16,
              }}
            />
          </View>

          {/* <Button
            title={englishMode ? "Go back" : "Tagasi"}
            //onPress={() => navigation.navigate("HomeTab")}
            onPress={() =>
              navigation.reset({
                routes: [{ name: "Bottomtab" }],
              })
            }
          /> */}
          <TouchableOpacity
            style={styles.buttonOutside}
            onPress={() =>
              navigation.reset({
                routes: [{ name: "Bottomtab" }],
              })
            }
          >
            <Text style={styles.buttonText}>
              {englishMode ? "Go back" : "Tagasi"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: backgroundColor,
  },
  scrollView: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    textAlign: "center",
    borderRadius: 10,
  },
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
