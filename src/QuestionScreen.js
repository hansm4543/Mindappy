import React, { useState, useEffect } from "react";
import { Button, View, Image, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import SingleQuestion from "./SingleQuestion";

function StartScreen({ navigation, route }) {
  const storeData = route?.params?.storeData;
  const getData = route?.params?.getData;
  const [count, setCount] = useState({ boolean: false });

  const getDataInformation = async () => {
    let value = await getData();
    console.log(value);
    setCount(value);
  };

  const questionsList = [
    "I recognize what I am feeling",
    "When I am overcome with strong emotions I know how to manage them",
    "question3",
    "question4",
    "I struggle to start working or studying without procrastinating",
  ];

  const [open, setOpen] = useState([false, false, false, false, false]);
  const [value, setValue] = useState([null, null, null, null, null]);
  const [items, setItems] = useState([
    [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ],
    [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ],
    [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ],
    [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ],
    [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
    ],
  ]);

  useEffect(() => {
    console.log(open);
    console.log(value);
    console.log(items);
  }, [open]);

  console.log(open);

  const setOpenHandler = (i) => (e) => {
    console.log(i);
    console.log(e);

    const newObject = [...open];
    newObject[i] = e;
    console.log(newObject);
    setOpen(newObject);
  };

  const setValueHandler = (i) => (e) => {
    console.log(i);
    console.log(e);

    const newObject = [...value];
    newObject[i] = e;
    console.log(newObject);
    setValue(newObject);
  };

  const setItemsHandler = (i) => (e) => {
    console.log(i);
    console.log(e);

    // const newObject = [...value];
    // newObject[i] = e;
    // console.log(newObject);
    // //setOpen(newObject);
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
        <div key={i}>
          <SingleQuestion
            question={questionData}
            open={open[i]}
            value={value[i]}
            items={items[i]}
            setOpen={setOpenHandler(i)}
            setValue={setValueHandler(i)}
            setItems={setItemsHandler(i)}
          ></SingleQuestion>
        </div>
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
