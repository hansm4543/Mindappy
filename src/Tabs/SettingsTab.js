import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";

const Settings = ({ navigation, route }) => {
  const englishMode = route?.params?.englishMode;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>{"hello"}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgray",
  },
  scrollView: {
    backgroundColor: "gray",
    marginBottom: 80,
    marginHorizontal: 10,
    marginTop: 10,
    alignContent: "center",
    textAlign: "center",
    flex: 1,
    borderRadius: 10,
  },
  text: {
    fontSize: 42,
    margin: 5,
  },
});

export default Settings;
