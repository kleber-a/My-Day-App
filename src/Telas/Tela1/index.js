import React from 'react'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from './estilo/estiloTela1';
import Container from './componentes/Container';
import Caixas from '../Tela1/componentes/Caixas'




export default function Tela1({ navigation}) {
   
        let itemSave = {}
    return <>

        <View style={estiloTela1.Principal}>
        <FlatList
                contentContainerStyle={{paddingBottom: 20}}
                data={Caixas}
                renderItem={({ item }) =>
                    <TouchableOpacity  onPress={() => {
                        itemSave = item
                        navigation.navigate("Tela3", {itemSave})
                    }}>
                        <Container {...item} />
                    </TouchableOpacity>}
                keyExtractor={item => item.id.toString()}
            />

                

        </View>
    </>
}



