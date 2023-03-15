import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Divider } from "@rneui/themed";

function StartScreen({ i, englishMode, getValueForHeading }) {
  return (
    <View>
      {(i + 1) % 3 === 0 && i !== 14 && (
        <View style={{ alignSelf: "center" }}>
          <Text>{getValueForHeading(i, englishMode)}</Text>
        </View>
      )}
      {(i + 1) % 3 === 0 && i !== 14 && (
        <Divider
          style={{ width: "100%", margin: 0 }}
          color="#2089dc"
          insetType="left"
          width={1}
          orientation="horizontal"
        />
      )}
    </View>
  );
}

export default StartScreen;
