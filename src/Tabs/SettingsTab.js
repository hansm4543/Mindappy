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
  console.log(navigation);

  const changeLanguage = () => {
    storeData("@englishMode", { value: englishModeBottomTab ? false : true });
    setEnglishMode(englishModeBottomTab ? false : true);
    setEnglishModeBottomTab(englishModeBottomTab ? false : true);
    console.log("reset");

    navigation.reset({
      index: 0,
      routes: [{ name: "SettingsTab" }],
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "lightblue",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightblue",
          marginVertical: "30%",
        }}
      >
        <Text style={[styles.font]}>
          {englishModeBottomTab ? "Language" : "Keel"}
        </Text>
        <Button
          title={englishModeBottomTab ? "English" : "Eesti"}
          onPress={() => changeLanguage()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 25,
    marginBottom: 20,
  },
});

export default Settings;
