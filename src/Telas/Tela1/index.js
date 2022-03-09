import React, { useEffect, useState } from 'react'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from './estilo/estiloTela1';
import Container from './componentes/Container';
import Caixas from '../Tela1/componentes/Caixas'
import api from '../../services/api'
import Tela3 from '../Tela3';






export default function Tela1({ navigation }) {

    const [dados, setDados] = useState()
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {//Pegando dados pela API
        async function getStorage() {
            await api.get("daily_entries?username=KleberAndrade")
                .then(response => {
                    const data =  response.data
                    setDados(data)
                })
                .catch(error => console.log(error))
                .finally(() => setCarregando(false))
        }
        getStorage()

    }, [])



   

    
    return <>

        <View style={estiloTela1.Principal}>
            
            <FlatList
                contentContainerStyle={{ paddingBottom: 20 }}
                data={dados}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>

                    
                    <TouchableOpacity onPress={() => {
                        if(carregando === false){
                            
                            navigation.navigate("Tela3", {...item} )
                        }
                    }}>
                        <Container {...item} />
                    </TouchableOpacity>}

            />



        </View>
    </>
}



