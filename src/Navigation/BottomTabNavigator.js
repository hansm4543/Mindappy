import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../Tabs/HomeTab";
import Notifications from "../Tabs/NotificationsTab";
import Settings from "../Tabs/SettingsTab";
import { useState } from "react";

const Tab = createMaterialTopTabNavigator();

function BottomTabNavigator({ navigation, route }) {
  const expoPushToken = route?.params?.expoPushToken;
  const schedulePushNotification = route?.params?.schedulePushNotification;
  const englishMode = route?.params?.englishMode;
  const setEnglishMode = route?.params?.setEnglishMode;
  const storeData = route?.params?.storeData;

  const [englishModeBottomTab, setEnglishModeBottomTab] = useState(englishMode);

  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      tabBarPosition="bottom"
      initialRouteName="HomeTab"
      initialParams={{ englishMode }}
      screenOptions={({ route, navigation }) => ({
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#2596be",
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
      <Tab.Screen
        name="SettingsTab"
        component={Settings}
        initialParams={{
          englishModeBottomTab,
          setEnglishMode,
          setEnglishModeBottomTab,
          storeData,
          schedulePushNotification,
        }}
      />
      <Tab.Screen
        name="HomeTab"
        component={Home}
        initialParams={{ englishMode: englishModeBottomTab }}
      />
      <Tab.Screen
        name="NotificationsTab"
        component={Notifications}
        initialParams={{
          expoPushToken,
          schedulePushNotification,
          englishMode: englishModeBottomTab,
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
