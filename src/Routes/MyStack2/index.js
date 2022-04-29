import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela1 from '../../Telas/Tela1'
import Tela3 from '../../Telas/Tela3'



Stack = createNativeStackNavigator();

function MyStack2() {
  return (

    <Stack.Navigator initialRouteName="Tela1">
      <Stack.Screen
        options={{headerShown: false}} 
        name="Tela1" component={Tela1} />

      <Stack.Screen
        options={{headerShown: false,
        headerTransparent: false}}
        name="Tela3" component={Tela3} />

    </Stack.Navigator>

  );
}

export default MyStack2;