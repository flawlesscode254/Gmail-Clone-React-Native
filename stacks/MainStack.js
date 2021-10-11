import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GmailScreen from "../screens/GmailScreen";
import MeetScreen from "../screens/MeetScreen";

const MainStack = () => {
  const Stack = createBottomTabNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Mail" component={GmailScreen} />
      <Stack.Screen name="Meet" component={MeetScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
