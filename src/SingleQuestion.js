import React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { Button, View, Image, Text } from "react-native";
import Select from "react-select";

const SingleQuestion = ({
  question,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
}) => {
  console.log(question);
  return (
    <>
      <Text>{question}</Text>
      <DropDownPicker
        style={{
          width: "250px",
          alignSelf: "center",
        }}
        dropDownContainerStyle={{
          backgroundColor: "#dfdfdf",
          alignSelf: "center",
          width: "250px",
        }}
        selectedItemLabelStyle={{
          fontWeight: "bold",
        }}
        placeholderStyle={{
          color: "grey",
          fontWeight: "bold",
        }}
        textStyle={{
          fontSize: 15,
        }}
        labelStyle={{
          fontWeight: "bold",
        }}
        placeholder={"Olen placeholder"}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    </>
  );
};

export default SingleQuestion;
