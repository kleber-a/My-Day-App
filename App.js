import React, { Component, useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Routes/MyStack';
import api, { addUser, getUser, getUseractives, deleteUser } from './src/services/api';
import Atividades from './src/Telas/Atividades';


export default function App() {
  const [contagem, setContagem] = useState(200)
  const [name, setName] = useState('')
  const [teste, setTeste] = useState(contagem>100? 'Certo' : 'Errado')
  

  return (
    <View>
      <Text>{teste}</Text>
      <Text>{name}</Text>
    </View>

  )
}





{/* <NavigationContainer>
<MyStack />
</NavigationContainer>  */}




// useEffect(()=>{}, [])

// function 





{/* <View style={{ alignItems: 'center' }}>
<Text style={{ marginTop: 80 }}>Teste acrescentar array</Text>
<Button
  title="Press me"
  onPress={() => setContagem(),
    console.warn(contagem)
  }
/>
</View> */}








// export default class App extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       atividades: []
//     }
//   }

//   async componentDidMount() {
//     const response = await api.get('activities/')
//     this.setState({
//       atividades: response.data
//     })
//   }




// render(){


//   return (
//     <View style={{ width: "100%", height: "100%", backgroundColor: "red" }} >

//       <View style={estilo.dividerActivity}>

//         {this.state.atividades.map(atividades => (

//           <Atividades style={estilo.dividerActivity1} {...atividades} />

//         ))}



//         {/* <FlatList
//         data={this.state.atividades}
//         keyExtractor={item => item.id.toString()}
//         renderItem={ ({item}) => 

//         <Atividades style={estilo.dividerActivity1} {...item} /> 
//       }
//         /> */}
//       </View>

//     </View>

//   );
// }
// }


// const estilo = StyleSheet.create({
//   dividerActivity: {
//     flexDirection: 'row',
//     justifyContent: 'flex-start',
//     flexWrap: 'wrap',
//     alignContent: 'stretch',
//     width: 200,
//     height: 200,

//     backgroundColor: '#E5E5E5',
//     borderRadius: 20,
//     padding: 35,

//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.75,
//     shadowRadius: 4,
//     elevation: 5
//   },

//   dividerActivity1: {
//     width: 100,
//     height: 60
//   },


// })


// //27 de março

{/* <NavigationContainer>
<MyStack />
</NavigationContainer> */}



// // const User = {
// //   "id": 1,
// //   "mood": "happy",
// //   "created_at": "2022-02-21T20:19:59.670Z",
// //   "updated_at": "2022-02-21T20:19:59.670Z",
// //   "username": "francislene",
// //   "short_description": "Hoje foi m...",
// //   "activities": [{ "id": 1, "name": "sports" },  { "id": 3, "name": "rest" }]
// // }
