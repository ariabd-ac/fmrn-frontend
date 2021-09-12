import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignIn, SignUp, SplashScreen, SuccesSignUp} from '../pages';
import SignUpAddress from '../pages/SignUpAddress';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SuccesSignUp">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccesSignUp"
        component={SuccesSignUp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
