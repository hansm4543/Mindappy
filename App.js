import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import StartScreen from "./src/StartScreen";
import QuestionScreen from "./src/QuestionScreen";

const Stack = createNativeStackNavigator();

function App() {
  let isFirstStartUp = false;
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
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
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
