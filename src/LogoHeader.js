import * as React from "react";
import { View, Image, SafeAreaView } from "react-native";

const LogoHeader = () => {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <View
        style={{ alignItems: "center", backgroundColor: "white", height: 70 }}
      >
        <View
          style={{
            marginTop: 10,
            width: 150,
            height: 50,
          }}
        >
          <Image
            style={{
              flex: 1,
              width: undefined,
              height: undefined,
            }}
            source={require("./../Mindappy.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogoHeader;
