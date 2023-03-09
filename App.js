import * as React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import StartScreen from "./src/StartScreen";
import QuestionScreen from "./src/QuestionScreen";
import ResultScreen from "./src/ResultScreen";
import ExerciseScreen from "./src/ExerciseScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

function App() {
  const [count, setCount] = useState({ answered: false });
  const [loading, isLoading] = useState(true);

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const returnValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      return returnValue;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    console.log("refresh");

    const fetchData = async () => {
      // get the data from the api
      const data = await getData("@answered");
      // set state with the result
      if (data !== null) {
        setCount(data);
      }
      isLoading(false);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [loading]); // Only re-run the effect if [in brackets] changes

  //top one is correct to get into question screen
  //let isFirstStartUp = count.answered ? true : false;
  let isFirstStartUp = count.answered ? false : true;
  const InitialRoute = isFirstStartUp ? "Bottomtab" : "StartScreen";

  if (loading) {
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
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={InitialRoute}
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen
          name="ExerciseScreen"
          component={ExerciseScreen}
          initialParams={{ storeData, getData }}
        />
        <Stack.Screen
          name="QuestionScreen"
          component={QuestionScreen}
          initialParams={{ storeData, getData }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ headerShown: false }}
          initialParams={{ getData }}
        />
        <Stack.Screen
          name="Bottomtab"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
