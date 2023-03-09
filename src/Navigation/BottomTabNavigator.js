import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../Home";
import Notifications from "../Notifications";
import Settings from "../Settings";

const Tab = createMaterialTopTabNavigator();

function BottomTabNavigator({ navigation, route }) {
  // const storeData = route?.params?.storeData;
  // const getData = route?.params?.getData;

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      tabBarPosition="bottom"
      initialRouteName="HomeTab"
      screenOptions={({ route, navigation }) => ({
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "purple",
        tabBarStyle: {
          borderRadius: 10,
          position: "absolute",
          borderTopWidth: 0,
          bottom: 15,
          right: 10,
          left: 10,
          height: 50,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;

          if (route.name === "HomeTab") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "SettingsTab") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "NotificationsTab") {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          }

          return <Icon name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name="NotificationsTab" component={Notifications} />
      <Tab.Screen
        name="HomeTab"
        component={Home}
        //initialParams={{ storeData: storeData, getData: getData }}
      />
      <Tab.Screen name="SettingsTab" component={Settings} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
