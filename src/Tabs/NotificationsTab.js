import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { backgroundColor } from "./../../constants";

const Notifications = ({ navigation, route }) => {
  const expoPushToken = route?.params?.expoPushToken;
  const schedulePushNotification = route?.params?.schedulePushNotification;
  const englishMode = route?.params?.englishMode;

  const [hour, setHour] = useState("0");
  const [minute, setMinute] = useState("0");

  useEffect(() => {
    //console.log("refresh");
  }, [expoPushToken]); // Only re-run the effect if [in brackets] changes

  //onPress={() => Alert.alert('Simple Button pressed')}

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
          backgroundColor: backgroundColor,
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
        backgroundColor: backgroundColor,
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

        {/* <Button
          title={englishMode ? "15 minutes" : "15 minutit"}
          onPress={async () => {
            await schedulePushNotification("minutes");
          }}
        /> */}
        <TouchableOpacity
          style={styles.buttonOutside}
          onPress={async () => {
            await schedulePushNotification("minutes");
          }}
        >
          <Text style={styles.buttonText}>
            {englishMode ? "15 minutes" : "15 minutit"}
          </Text>
        </TouchableOpacity>

        {/* <Button
          title={englishMode ? "1 Hour" : "1 tund"}
          onPress={async () => {
            await schedulePushNotification("hour");
          }}
        /> */}
        <TouchableOpacity
          style={styles.buttonOutside}
          onPress={async () => {
            await schedulePushNotification("hour");
          }}
        >
          <Text style={styles.buttonText}>
            {englishMode ? "1 Hour" : "1 tund"}
          </Text>
        </TouchableOpacity>
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
        {/* <Button
          title={englishMode ? "Notify me" : "Teavita mind"}
          onPress={async () => {
            await schedulePushNotification(
              "timed",
              {
                hour: hour,
                minute: minute,
              },
              englishMode
            );
          }}
        /> */}
        <TouchableOpacity
          style={styles.buttonOutside}
          onPress={async () => {
            await schedulePushNotification(
              "timed",
              {
                hour: hour,
                minute: minute,
              },
              englishMode
            );
          }}
        >
          <Text style={styles.buttonText}>
            {englishMode ? "Notify me" : "Teavita mind"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    width: 60,
    borderColor: "#a9a9a9",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  font: {
    fontSize: 25,
    marginHorizontal: 10,
  },
  buttonOutside: {
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 10,
    width: 200,
    borderRadius: 10,
    borderColor: "#a9a9a9",
    borderWidth: 2,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#838383",
  },
});
