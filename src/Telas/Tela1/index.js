import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from './estilo/estiloTela1';
import Container from './componentes/Container';
import Caixas from '../Tela1/componentes/Caixas'

import Tela3 from '../Tela3';
import { getStorage } from '../../services/api';





export default function Tela1({ navigation }) {

    const [dados, setDados] = useState()
    

   useEffect(()=>{
       async function awaitData(){
           const awaitdata = await getStorage()
           
           setDados(awaitdata.data)
       }
       awaitData()
   },[])


    
    return <>

        <View style={estiloTela1.Principal}>
            
            <FlatList
                contentContainerStyle={{ paddingBottom: 20 }}
                data={dados}
                keyExtractor={(item,index)=> {item}}
                renderItem={({ item }) =>

                    
                    <TouchableOpacity key={item} onPress={() => {
                            
                            navigation.navigate("Tela3", {...item} )
                        
                    }}>
                        <Container key={item} {...item} />
                    </TouchableOpacity>}

            />



        </View>
    </>
}



