import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from '../../Telas/TelaLogin';
import Principal from '../../Telas/Principal';
import Auxilio from '../../Telas/Auxilio';
const Stack = createNativeStackNavigator();
  
  function MyStack() {
    return (
    
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          options={{
            headerShown: false,
          }} name="Login" component={TelaLogin} />
  
        <Stack.Screen
         options={{
          headerShown: false,
         }}
         name="auxilio" component={Auxilio} />
      </Stack.Navigator>
    );
  }

  export default MyStack;