import React from 'react';  
import { Button, View,Text,Image, TextInput, TouchableOpacity, Settings, push, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from './src/Telas/TelaLogin';
import Principal from './src/Telas/Principal';
import Tela1 from './src/Telas/Tela1';
  
  const Stack = createNativeStackNavigator();
  
  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
          component={Settings}
          options={{
            headerShown: false,
          }} name="Login" component={TelaLogin} />
  
        <Stack.Screen
         component={Settings}
         options={{
          headerShown: false,
         }}
         name="Principal" component={Principal} />
      </Stack.Navigator>
    );
  }

export default function App() {
  return (
     <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

  
  













//======================================================


//  <NavigationContainer>
  //    <Routes/> 
  //  </NavigationContainer>
