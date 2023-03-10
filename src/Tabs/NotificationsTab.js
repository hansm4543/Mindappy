import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useState, useEffect, useRef } from "react";

const Notifications = ({ navigation, route }) => {
  const expoPushToken = route?.params?.expoPushToken;
  const notification = route?.params?.notification;
  const schedulePushNotification = route?.params?.schedulePushNotification;
  const Linking = route?.params?.Linking;

  useEffect(() => {
    console.log("refresh");
  }, [expoPushToken]); // Only re-run the effect if [in brackets] changes

  if (expoPushToken === "") {
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>NotificationsTab</Text>
      <Text>{"\n"}</Text>
      <Text>Your expo push token: {expoPushToken}</Text>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Title: {notification && notification.request.content.title}{" "}
        </Text>
        <Text>Body: {notification && notification.request.content.body}</Text>
        <Text>
          Data:{" "}
          {notification && JSON.stringify(notification.request.content.data)}
        </Text>
      </View>
      <Button
        title="Press to schedule a notification"
        onPress={async () => {
          await schedulePushNotification();
        }}
      />
      <Button title="Press to settings" onPress={Linking.openSettings} />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
