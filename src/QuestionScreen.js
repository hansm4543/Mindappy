import React, { useState, useEffect } from "react";
import { Button, View, Image, Text } from "react-native";

function StartScreen({ navigation, route }) {
  const storeData = route?.params?.storeData;
  const getData = route?.params?.getData;
  const [count, setCount] = useState({ boolean: false });

  const getDataInformation = async () => {
    let value = await getData();
    console.log(value);
    setCount(value);
  };

  useEffect(() => {}, [count]);

  console.log(count.boolean.toString());

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{"Questions"}</Text>
      <Text>{count.boolean.toString()}</Text>
      <Text>{"\n"}</Text>
      <Button
        title="Enter data true"
        onPress={() => storeData({ boolean: true })}
      />
      <Text>{"\n"}</Text>
      <Button
        title="Enter data false"
        onPress={() => storeData({ boolean: false })}
      />
      <Text>{"\n"}</Text>
      <Button title="Get data" onPress={() => getDataInformation()} />
      <Text>{"\n"}</Text>
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
