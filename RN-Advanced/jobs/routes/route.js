import React, { Component } from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import WelcomeScreen from '../screens/welcome.screen';
import AuthScreen from '../screens/auth.screen';

const TabBarComponent = createBottomTabNavigator({
  Welcome: WelcomeScreen,
  Autenticate: AuthScreen  
});

export default TabBarComponent;