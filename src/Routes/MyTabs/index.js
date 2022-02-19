import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from '../../Telas/Principal'
import Tela1 from '../../Telas/Tela1'
import Tela2 from '../../Telas/Tela2'
import Icon from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/Entypo'
import MyStack2 from '../MyStack2';


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName='Principal' screenOptions={{ tabBarShowLabel: false, headerShown: false }} >

      <Tab.Screen options={{
        tabBarIcon: () => <Icone name="home" color={"blue"} size={30} />,
      }} name="MyStack2" component={MyStack2} />

      <Tab.Screen options={{
        tabBarIcon: () => <Icon name="pluscircle" color={"blue"} size={48} />,
      }}  name="Principal" component={Principal} />

      <Tab.Screen options={{
        tabBarIcon: () => <Icone name="menu" color={"#304FFE"} size={30} />,
      }} name="Tela2" component={Tela2} />


    </Tab.Navigator>
  );
}
export default MyTabs