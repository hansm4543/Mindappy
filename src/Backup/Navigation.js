import * as React from "react";
import { Button, View, Image, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./src/BottomTabNavigator";

function StartScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image
        source={{ uri: "https://via.placeholder.com/208x208/ccc" }}
        style={{ width: 400, height: 400 }}
      />
      <Text>{"\n"}</Text>
      <Button
        title="Enter The Application"
        onPress={() => navigation.navigate("Bottomtab")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={({ route }) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
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
