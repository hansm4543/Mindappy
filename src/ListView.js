import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ExerciseScreen = ({ listData }) => {
  console.log(listData);
  return (
    <View>
      {listData.map((listElement, i) => (
        <View key={i}>
          <Text style={styles[listElement.fontWeight]}>
            - {listElement.data}
          </Text>
        </View>
      ))}
      <Text>{"\n"}</Text>
    </View>
  );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
  normal: {
    fontSize: 16,
  },
});
