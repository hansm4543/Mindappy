import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import StartScreen from "./src/StartScreen";
import QuestionScreen from "./src/QuestionScreen";
import ResultScreen from "./src/ResultScreen";
import ExerciseScreen from "./src/ExerciseScreen";
import LogoHeader from "./src/LogoHeader";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import { backgroundColor } from "./constants";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Stack = createNativeStackNavigator();

function App() {
  //for Notifications
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  //For other stuff
  const [questionsAnswered, setQuestionsAnswered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [englishMode, setEnglishMode] = useState(true);

  const storeData = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      // saving error
    }
  };

  const getData = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      const returnValue = jsonValue != null ? JSON.parse(jsonValue) : null;
      return returnValue;
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    //console.log("refresh");

    const fetchData = async () => {
      // get the data from the api
      const answered = await getData("@answered");
      // set state with the result
      if (answered !== null) {
        setQuestionsAnswered(answered.value);
      }
      const language = await getData("@englishMode");
      if (language !== null) {
        setEnglishMode(language.value);
      }
      setIsLoading(false);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, [isLoading]); // Only re-run the effect if [in brackets] changes

  //top one is correct to get into question screen after first startup
  let isNotFirstStartUp = questionsAnswered ? true : false;
  //let isNotFirstStartUp = questionsAnswered ? false : true;
  const InitialRoute = isNotFirstStartUp ? "Bottomtab" : "StartScreen";

  //if (isLoading || (expoPushToken === "" && Platform.OS !== "web")) {
  if (isLoading) {
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
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={InitialRoute}
        screenOptions={({ route }) => ({
          headerShown: true,
        })}
      >
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
          initialParams={{ englishMode, setEnglishMode, storeData }}
        />
        <Stack.Screen
          name="ExerciseScreen"
          component={ExerciseScreen}
          initialParams={{ storeData, getData, englishMode }}
          options={{ header: (props) => <LogoHeader /> }}
        />
        <Stack.Screen
          name="QuestionScreen"
          component={QuestionScreen}
          initialParams={{
            storeData,
            getData,
            englishMode,
            questionsAnswered,
            setQuestionsAnswered,
          }}
          options={{ header: (props) => <LogoHeader /> }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ header: (props) => <LogoHeader /> }}
          initialParams={{ getData, englishMode }}
        />
        <Stack.Screen
          name="Bottomtab"
          component={BottomTabNavigator}
          options={{ header: (props) => <LogoHeader /> }}
          initialParams={{
            expoPushToken,
            schedulePushNotification,
            englishMode,
            setEnglishMode,
            storeData,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

async function schedulePushNotification(
  version = undefined,
  englishMode,
  time
) {
  function incrementDate(dateInput, increment) {
    var dateFormatTotime = new Date(dateInput);
    var increasedDate = new Date(
      dateFormatTotime.getTime() + increment * 86400000
    );
    return increasedDate;
  }
  // var dateWith31 = new Date("2017-08-31");
  // var dateWith29 = new Date("2016-02-29");

  var amountToIncreaseWith = 1; //Edit this number to required input
  // console.log(incrementDate(dateWith31, amountToIncreaseWith));
  // console.log(incrementDate(dateWith29, amountToIncreaseWith));
  let newDate = new Date(Date.now());

  let text = englishMode ? "Time to exercise" : "Harjutuste tegemise aeg";
  if (version === "minutes") {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: text,
        body: "Mindappy",
      },
      trigger: {
        seconds: 60 * 15,
        repeats: false,
      },
    });
  } else if (version === "hour") {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: text,
        body: "Mindappy",
      },
      trigger: {
        seconds: 60 * 60,
        repeats: false,
      },
    });
  } else if (version === "timed") {
    let timedDate = incrementDate(newDate, amountToIncreaseWith);
    timedDate.setMinutes(parseInt(time.minute));
    timedDate.setHours(parseInt(time.hour));

    await Notifications.DailyNotificationTrigger({
      content: {
        title: text,
        body: "Mindappy",
      },
      trigger: timedDate,
    });
  } else {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: text,
        body: "Mindappy",
      },
      trigger: {
        seconds: 5,
        repeats: false,
      },
    });
  }
  console.log(await Notifications.getAllScheduledNotificationsAsync());
}

async function registerForPushNotificationsAsync() {
  let token;
  console.log(Platform.OS);
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice && Platform.OS !== "web") {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    //alert("Must use physical device for Push Notifications");
    //re add before publishing
  }

  return token;
}

export default App;
