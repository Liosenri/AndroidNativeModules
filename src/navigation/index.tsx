import React from 'react';

import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import BubblesScreen from '../containers/bubbles_screen';
import EncryptScreen from '../containers/encrypt_screen';
import LoginScreen from '../containers/login_screen';
import HomeScreen from '../containers/home_screen';

export type HomeStackParamList = {
  Circles: undefined;
  Encrypt: undefined;
  Login: undefined;
  Home: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

const screenOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

export const HomeStackNavigator = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: 'black' },
      headerTintColor: 'white',
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={screenOptions}
    />
    <HomeStack.Screen
      name="Login"
      component={LoginScreen}
      options={screenOptions}
    />
    <HomeStack.Screen
      name="Encrypt"
      component={EncryptScreen}
      options={screenOptions}
    />
    <HomeStack.Screen
      name="Circles"
      component={BubblesScreen}
      options={screenOptions}
    />
  </HomeStack.Navigator>
);
