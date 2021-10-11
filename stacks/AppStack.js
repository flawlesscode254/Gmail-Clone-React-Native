import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthStack from "./AuthStack";
import MainStack from "./MainStack";

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={MainStack} />
      <Stack.Screen name="Auth" component={AuthStack} />
    </Stack.Navigator>
  );
};

export default AppStack;
