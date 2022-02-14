import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import TelaLogin from "../Telas/TelaLogin";
import { createStackNavigator } from "@react-navigation/stack";
import Principal from '../Telas/Principal'

  // export default function Routes(navigation){
  //     const Stack = createStackNavigator();
  //     return (
  //     <NavigationContainer>
  //         <Stack.Navigator intialRouteName="Login">
  //             <Stack.Screen name="Login" component={TelaLogin} />
  //             <Stack.Screen name="Home" component={Principal} />
  //         </Stack.Navigator>
  //       </NavigationContainer>
  //     );

  // }

  // function MyTabs() {
//     const Tab = createStackNavigator();
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Principal} />
//         <Tab.Screen name="Tela1" component={Tela1} />
//       </Tab.Navigator>
//     );
//   }