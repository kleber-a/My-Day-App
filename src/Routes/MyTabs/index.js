import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Principal from '../../Telas/Principal'
import Tela1 from '../../Telas/Tela1'
import Tela2 from '../../Telas/Tela2'
import Icon from 'react-native-vector-icons/AntDesign'
import Icone from 'react-native-vector-icons/Entypo'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false ,headerShown: false }} >
      <Tab.Screen options={{
        tabBarIcon: () => <Icone name="home" color={"blue"} size={30} /> ,
      }} name="Principal" component={Principal}/>
      <Tab.Screen options={{
        tabBarIcon: () => <Icon name="pluscircle" color={"blue"} size={48} /> ,
        }} name="Tela2" component={Tela2} />
      <Tab.Screen options={{
        tabBarIcon: () => <Icone name="menu" color={"#304FFE"} size={30} /> ,
        }} name="Tela1" component={Tela1} />
    </Tab.Navigator>
  );
}
export default MyTabs