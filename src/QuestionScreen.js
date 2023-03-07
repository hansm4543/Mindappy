import React, { useState, useEffect } from "react";
import { Button, View, Image, Text, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

function StartScreen({ navigation, route }) {
  // const storeData = route?.params?.storeData;
  // const getData = route?.params?.getData;
  // const [count, setCount] = useState({ boolean: false });

  // const getDataInformation = async () => {
  //   let value = await getData();
  //   console.log(value);
  //   setCount(value);
  // };

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

  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  const [valuearr, setValue] = useState([null, null, null, null, null]);
  const [isFocus, setIsFocus] = useState([false, false, false, false, false]);

  console.log(valuearr);
  const setValueHandler = (value, i) => {
    const newArr = [...valuearr];
    newArr[i] = value;
    setValue(newArr);
  };

  const setFocusHandler = (value, i) => {
    const newArr = [...isFocus];
    newArr[i] = value;
    setIsFocus(newArr);
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
        <View style={styles.container}>
          <Text>{questionData}</Text>
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            data={data}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={"..."}
            value={valuearr[i]}
            onChange={(item) => {
              setValueHandler(item.value, i);
            }}
          />
        </View>
      ))}

      <Text>{"\n"}</Text>
      <Text>{"\n"}</Text>

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
