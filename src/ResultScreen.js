import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";

const ResultScreen = ({ navigation, route }) => {
  const getData = route?.params?.getData;

  const getDataInformation = async () => {
    let value = await getData();
    console.log(value);
  };
  console.log(route);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>Results Tab</Text>

      {/* <Button
        title="Store F"
        onPress={() => storeData("@answered", { answered: false })}
      />  */}
      <Button title="Log Results" onPress={() => getDataInformation()} />
    </View>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({});
