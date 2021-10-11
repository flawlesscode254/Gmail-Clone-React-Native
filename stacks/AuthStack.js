import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

const AuthStack = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator
            screeenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen 
                name="SignIn"
                component={SignInScreen}
            />
            <Stack.Screen 
                name="SignUp"
                component={SignUpScreen}
            />
        </Stack.Navigator>
    )
}

export default AuthStack
