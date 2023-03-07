import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import * as Device from "expo-device";
import storage from "@react-native-async-storage/async-storage";

//1. import the library
//2. get permission
//3. do push notifications on button click
//4. schedule push notifications

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    const getPermission = async () => {
      if (Device.isDevice) {
        const { status: existingStatus } =
          await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== "granted") {
          alert("Enable push notifications to use the app!");
          await storage.setItem("expopushtoken", "");
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        await storage.setItem("expopushtoken", token);
      } else {
        alert("Must use physical device for Push Notifications");
      }

      if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
          name: "default",
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: "#FF231F7C",
        });
      }
    };

    getPermission();

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {});

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const onClick = async () => {
    const trigger = new Date(Date.now() + 60 * 60 * 10);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Title",
        body: "body",
      },
      trigger: trigger,
    });
  };

  const onClick3 = async () => {
    const trigger = new Date(Date.now() + 60 * 60 * 10);

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Igap2ev",
        body: "text",
      },
      trigger: {
        hour: 13,
        minute: 51,
        repeats: true,
      },
    });
  };

  const onClick1 = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();

    await Notifications.scheduleNotificationAsync({
      content: {
        title: "We are",
        body: "Disabled",
      },
      trigger: {
        seconds: 5,
        repeats: false,
      },
    });
  };
  const onClick4 = async () => {
    console.log(await Notifications.getAllScheduledNotificationsAsync());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onClick}>
        <Text style={{ backgroundColor: "red", padding: 10, color: "white" }}>
          Click me to send a push notification
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClick1}>
        <Text style={{ backgroundColor: "red", padding: 10, color: "white" }}>
          Click me to Stop
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onClick3}>
        <Text style={{ backgroundColor: "red", padding: 10, color: "white" }}>
          Click me to try
        </Text>
      </TouchableOpacity>
      <Button onPress={onClick4} title="Learn More"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
