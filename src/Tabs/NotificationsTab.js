import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";

const Notifications = ({ navigation, route }) => {
  const expoPushToken = route?.params?.expoPushToken;
  const schedulePushNotification = route?.params?.schedulePushNotification;
  const englishMode = route?.params?.englishMode;

  const [hour, setHour] = useState("0");
  const [minute, setMinute] = useState("0");

  useEffect(() => {
    //console.log("refresh");
  }, [expoPushToken]); // Only re-run the effect if [in brackets] changes

  const getHours = () => {
    let hours = [];
    for (let i = 0; i < 25; i++) {
      hours.push({ label: i.toString(), value: i.toString() });
    }
    return hours;
  };

  const getMinutes = () => {
    let minutes = [];
    for (let i = 0; i < 61; i++) {
      minutes.push({ label: i.toString(), value: i.toString() });
    }
    return minutes;
  };

  const minutesList = getMinutes();
  const hoursList = getHours();

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
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "lightblue",
        paddingTop: "30%",
        paddingBottom: "40%",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={[styles.font]}>
          {englishMode ? "Short term notificatons" : "Lühiajalised teavitused"}
        </Text>

        <Button
          title={englishMode ? "15 minutes" : "15 minutit"}
          onPress={async () => {
            await schedulePushNotification("minutes");
          }}
        />

        <Button
          title={englishMode ? "1 Hour" : "1 tund"}
          onPress={async () => {
            await schedulePushNotification("hour");
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Text style={[styles.font]}>
          {englishMode ? "Timed notification" : "Määratud ajaline teavitus"}
        </Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Dropdown
            style={[styles.dropdown]}
            data={hoursList}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={"..."}
            value={hour}
            onChange={(item) => {
              setHour(item.value);
            }}
          />
          <Text style={[styles.font]}>{":"}</Text>
          <Dropdown
            style={[styles.dropdown]}
            data={minutesList}
            maxHeight={200}
            labelField="label"
            valueField="value"
            placeholder={"..."}
            value={minute}
            onChange={(item) => {
              setMinute(item.value);
            }}
          />
        </View>
        <Button
          title={englishMode ? "Schedule a notification" : "Teavita mind"}
          onPress={async () => {
            await schedulePushNotification();
          }}
        />
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 60,
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  font: {
    fontSize: 25,
    marginHorizontal: 10,
  },
});
