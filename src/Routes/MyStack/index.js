import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from '../../Telas/TelaLogin';
import MyTabs from '../MyTabs'
import Tela1 from '../../Telas/Tela1'
import Criacao from '../../Telas/Criacao'
import Teste from '../../Telas/Teste'


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

      <Stack.Screen
        options={{ headerShown: false }}
        name="Tela1" component={Tela1} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Criacao" component={Criacao} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Teste" component={Teste} />

    </Stack.Navigator>

  );
}

export default MyStack;