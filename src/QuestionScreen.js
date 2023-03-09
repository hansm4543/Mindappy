import React, { useState, useEffect } from "react";
import { Button, View, Image, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

function StartScreen({ navigation, route }) {
  const storeData = route?.params?.storeData;

  const questionsList = [
    "I recognize what I am feeling",
    "When I am overcome with strong emotions I know how to manage them",
    "question3",
    "question4",
    "I struggle to start working or studying without procrastinating",
  ];

  const answers = [
    { label: "Never", value: "never" },
    { label: "Sometimes", value: "sometimes" },
    { label: "Always", value: "always" },
  ];

  const [valueArr, setValue] = useState([null, null, null, null, null]);

  const setValueHandler = (value, i) => {
    const newArr = [...valueArr];
    newArr[i] = value;
    setValue(newArr);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      {questionsList.map((questionData, i) => (
        <View style={styles.container} key={i}>
          <Text>{questionData}</Text>
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

      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>

      <Button
        title="Store T"
        onPress={() => storeData("@answered", { answered: true })}
      />
      <Button
        title="Store F"
        onPress={() => storeData("@answered", { answered: false })}
      />

      <Button
        title="Enter The Application"
        onPress={() => navigation.navigate("Bottomtab")}
      />
    </View>
  );
}

export default StartScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  dropdown: {
    height: 50,
    width: 300,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
