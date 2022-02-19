import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaLogin from '../../Telas/TelaLogin';
import Auxilio from '../../Telas/Auxilio';
import Tela1 from '../../Telas/Tela1';
import Tela2 from '../../Telas/Tela2';
import Tela3 from '../../Telas/Tela3';
import Container from '../../Telas/Tela1/componentes/Container'



Stack = createNativeStackNavigator();

function MyStack() {
  return (

    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        options={{headerShown: false}} 
        name="Login" component={TelaLogin} />

      <Stack.Screen
        options={{headerShown: false}}
        name="auxilio" component={Auxilio} />

      <Stack.Screen
        options={{headerShown: true,
        headerTransparent: true}}
        name="Tela3" component={Tela3} />

      <Stack.Screen
        options={{headerShown: true}}
        name="Container" component={Container} />
    </Stack.Navigator>

  );
}

export default MyStack;