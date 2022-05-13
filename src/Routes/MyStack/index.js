import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from '../../Telas/TelaLogin';
import MyTabs from '../MyTabs'
import Tela1 from '../../Telas/Tela1'
import Criacao from '../../Telas/Criacao'
import Criar from '../../Telas/Criar'
import Atividades from '../../../src/Telas/Atividades'
import Login from '../../Telas/Login'


Stack = createNativeStackNavigator();

function MyStack() {
  return (

    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login" component={Login} />

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
        name="Criar" component={Criar} />

      <Stack.Screen
        options={{ headerShown: false }}
        name="Atividades" component={Atividades} />

    </Stack.Navigator>

  );
}

export default MyStack;