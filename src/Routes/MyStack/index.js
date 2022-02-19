import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from '../../Telas/TelaLogin';
import MyTabs from '../MyTabs'




Stack = createNativeStackNavigator();

function MyStack() {
  return (

    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login" component={TelaLogin} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="MyTabs" component={MyTabs} />

    </Stack.Navigator>

  );
}

export default MyStack;