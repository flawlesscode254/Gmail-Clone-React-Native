import React from "react";
import { Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import GmailScreen from "../screens/GmailScreen";
import MeetScreen from "../screens/MeetScreen";

const MainStack = () => {
  const Stack = createBottomTabNavigator();

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName = "mail";
      switch (route.name) {
        case "Mail":
          iconName = "mail";
          break;

        case "Meet":
          iconName = "videocam";
          break;

        default:
          iconName = "mail";
      }

      return (
        <Ionicons
          name={focused ? iconName : `${iconName}-outline`}
          color={focused ? "red" : "black"}
          size={focused ? 30 : 25}
        />
      );
    },
  });

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="Mail"
        component={GmailScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Meet"
        component={MeetScreen}
        options={{
          headerTitle: () => {
            return (
              <Text
                style={{
                  fontSize: 20,
                  letterSpacing: 1,
                }}
              >
                Meet
              </Text>
            );
          },
          headerTitleAlign: "center",
          headerLeft: () => {
            return <Ionicons name="menu" color="black" size={28} />;
          },
          headerRight: () => {
            return (
              <Image
                source={{
                  uri: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/02/firebase-logo-icon.png?fit=1200%2C600&ssl=1",
                }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 999,
                  marginRight: 10,
                }}
              />
            );
          }
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
