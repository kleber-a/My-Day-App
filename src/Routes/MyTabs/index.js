import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Principal from '../../Telas/Principal';
import Tela1 from '../../Telas/Tela1';
import Criacao from '../../Telas/Criacao';
import Icon from 'react-native-vector-icons/AntDesign';
import Icone from 'react-native-vector-icons/Entypo';
import MyStack2 from '../MyStack2';
import {Modal, View, Text, TouchableOpacity, Image, Button} from 'react-native';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  const TelaSuporte = () => <View style={{flex: 1, backgroundColor: 'red'}} />;

  return (
    <Tab.Navigator
      initialRouteName="Principal"
      screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icone
              name="home"
              color={'blue'}
              size={30}
              style={{
                backgroundColor: focused ? 'blue' : null,
                color: focused ? 'white' : 'blue',
                borderRadius: 20,
              }}
            />
          ),
        }}
        name="Principal"
        component={Principal}
      />

      <Tab.Screen
        name="TelaSuporte"
        component={TelaSuporte}
        options={{
          tabBarIcon: ({focused}) => (
            <Icon name="pluscircle" color={'blue'} size={48} />
          ),
        }}
        listeners={({navigation}) => ({
          tabPress: e => {
            e.preventDefault();
            navigation.navigate('Criar');
          },
        })}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <Icone
              name="menu"
              color={'#304FFE'}
              size={30}
              style={{
                backgroundColor: focused ? 'blue' : null,
                color: focused ? 'white' : 'blue',
                borderRadius: 20,
              }}
            />
          ),
        }}
        name="MyStack2"
        component={MyStack2}
      />
    </Tab.Navigator>
  );
}
