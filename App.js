import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import StartScreen from "./src/StartScreen";
import QuestionScreen from "./src/QuestionScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("@storage_Key", jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@storage_Key");
    const returnValue = jsonValue != null ? JSON.parse(jsonValue) : null;
    return returnValue;
  } catch (e) {
    // error reading value
  }
};

function App() {
  let isFirstStartUp = true;
  const InitialRoute = isFirstStartUp ? "QuestionScreen" : "Bottomtab";

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
          name="QuestionScreen"
          component={QuestionScreen}
          initialParams={{ storeData, getData }}
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
