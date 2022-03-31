import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routeName} from './routeName';
import LoginScreen from 'view/screen/AuthScreen/Login/LoginScreen';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator
      initialRouteName={routeName.auth.login}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={routeName.auth.login} component={LoginScreen} />
    </AuthStack.Navigator>
  );
}
