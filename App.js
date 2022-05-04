import React, { Component, useEffect, useState } from 'react';
import { LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './src/Routes/MyStack';
// LogBox.ignoreLogs([
//   "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
// ]);
LogBox.ignoreAllLogs();





export default function App() {
  return(
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}

















  // const [atividades, setAtividades] = useState([])
  // const [carregando, setCarregando] = useState(true)
  
  
  // const [borderRadius, setBorderRadius] = useState(30)
  // const [borderWidth, setBorderWidth] = useState(3)
  // const [borderColor, setBorderColor] = useState("#ACACAC")
  
  
  
  //   useEffect(() => {//Pegando dados pela API
  //     async function getStorage() {
  //         api.get("activities/")
  //             .then(response => {
  //                 const data = response.data
  //                 setAtividades(data)
  //             })
  //             .catch(error => console.log(error))
  //             .finally(() => setCarregando(false))
  //     }
  //     getStorage()
  
  // }, [])
  
  
  
  
  // const[getname,setGetname] = useState([])
  // const[getid,setGetid] = useState([])
  // const [botaoselecao,setBotaoselecao] = useState(false)
  
  
  
  
  // const [sports,setSports] = useState(() => ({
  //   texto: '',
  //   nameFinal: '',
  //   id: 0
  // }))
  //   function mudarNomes(name, id){
  //     if (name === 'sports'){
  //       setSports((prev) => ({
  //         nome: prev.nome =  'carro',
  //         nameFinal: prev.nameFinal = 'car-sports',
  //         id: prev.id = id 
  //     }))
  //     }
  //     return sports
  //   }
  
  
    
  //   return(
  //    <View style={estiloTelaCriacao.caixaselecao}>
  //      {atividades.map(({id,name}) => {
         
         
         
    //  function pegardados(valorname,valorid){
    //       if(getname.length <3){  
    //       setGetname([...getname, valorname])
    //       setGetid([...getid, valorid])
      
  // }
  // }
  //        return(
  //          <TouchableOpacity  style={{
  //           borderWidth: borderWidth,
  //           borderColor: borderColor,
  //           borderRadius: borderRadius,
  //           width: 50,
  //           height: 50
  //          }} onPress={() => pegardados(name,id)}>
  //            <MaterialCommunityIcons name={name} size={30}/>
  //            <Text></Text>
            
  //          </TouchableOpacity>
  //        )
  //      })}
  
  //     <Text>{getname}</Text>
  //     {console.warn(getname)}
  //     <Text>{getid}</Text>
  //     {console.warn()}
  
  //    </View>
  //   )
  //     }
      


 



 











// const [contagem, setContagem] = useState(200)
//   const [name, setName] = useState('')
//   const [teste, setTeste] = useState(() => ({
//     total: 2,
//     langs: [' python ', ' go '],
//   }))

//   function addlang() {
//     if(teste.total<3 ){
//     setTeste((prev) => ({
//       total: prev.langs.length + 1,
//       langs: [...prev.langs, 'js']
//     }))
//   }
//   }
//   function removelang() {
//    if(teste.total>0){
//     setTeste((prev) => ({
//       total: prev.langs.length - 1,
//       langs: prev.langs.slice(0, -1)
//     }))
//   }
//   }


//   const [data,setData] = useState(() => ({
//     total: 0,
//     ar : []
//   }))

//   function addar() {
//     setData((prev) => ({
//       total: prev.ar.length + 1,
//       ar: [...prev.ar, 'filetext1']
//     }))
//   }


//   return (
//     <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, }}>
      
//       <Text>{data.total}</Text>
//       <Text>{data.ar}</Text>
//       <TouchableOpacity onPress={() => addar()} >
//         <AntDesign size={50} name='filetext1' />
//       </TouchableOpacity>
      
      
      
      
//       <Text>{teste.total}</Text>
//       <Text>{teste.langs}</Text>
//       <Button
//         onPress={() => addlang()}
//         title="Aperte Aqui"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />

//       <Button
//         onPress={() => removelang()}
//         title="Aperte Aqui"
//         color="#841584"
//         accessibilityLabel="Learn more about this purple button"
//       />
//     </View>
//   )