import React from "react";
import { Button, View, Image, Text, BackHandler } from "react-native";

function StartScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Image
        source={{ uri: "https://via.placeholder.com/208x208/ccc" }}
        style={{ width: 208, height: 208 }}
      />
      <Text>{"\n"}</Text>
      <Button
        title="Enter The Application"
        onPress={() => navigation.navigate("QuestionScreen")}
      />
    </View>
  );
}

export default StartScreen;
