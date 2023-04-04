import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { backgroundColor } from "./../../constants";

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
      routes: [{ name: "SettingsTab" }],
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: backgroundColor,
          marginVertical: "30%",
        }}
      >
        <Text style={[styles.font]}>
          {englishModeBottomTab ? "Language" : "Keel"}
        </Text>
        {/* <Button
          title={englishModeBottomTab ? "English" : "Eesti"}
          onPress={() => changeLanguage()}
        /> */}
        <TouchableOpacity
          style={styles.buttonOutside}
          onPress={() => changeLanguage()}
        >
          <Text style={styles.buttonText}>
            {englishModeBottomTab ? "English" : "Eesti"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  font: {
    fontSize: 25,
    marginBottom: 20,
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

export default Settings;
