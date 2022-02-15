import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from '../../Telas/Principal'
import Tela1 from '../../Telas/Tela1'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Principal" component={Principal} />
      <Tab.Screen name="Tela1" component={Tela1} />
    </Tab.Navigator>
  );
}
export default MyTabs