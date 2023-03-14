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
  const englishModeBottomTab = route?.params?.englishModeBottomTab;
  const setEnglishMode = route?.params?.setEnglishMode;
  const setEnglishModeBottomTab = route?.params?.setEnglishModeBottomTab;
  const storeData = route?.params?.storeData;

  const changeLanguage = () => {
    storeData("@englishMode", { value: englishModeBottomTab ? false : true });
    setEnglishMode(englishModeBottomTab ? false : true);
    setEnglishModeBottomTab(englishModeBottomTab ? false : true);

    navigation.reset({
      index: 0,
      routes: [{ name: "SettingsTab" }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Button
          title={englishModeBottomTab ? "English" : "Eesti"}
          onPress={() => changeLanguage()}
        />
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
