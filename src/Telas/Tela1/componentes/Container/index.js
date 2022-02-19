import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ContainerCima from './ContainerCima';
import ContainerMeio from './ContainerMeio'

import estiloTela1 from '../../estilo/estiloTela1';
import Ponto from 'react-native-vector-icons/FontAwesome'
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialI from 'react-native-vector-icons/MaterialIcons'



export default function Container({ navigation, id, img, data, humor, color, hora, icone1, icone2, icone3,
 acao1, acao2, acao3, comentario}) {
     let Cima = {
         id: id,
         img : img,
         data : data,
         humor : humor,
         color : color,
         hora : hora
     }
     let Meio = {
        icone1 : icone1,
        icone2 : icone2,
        icone3 : icone3,
        acao1 : acao1,
        acao2 : acao2,
        acao3 : acao3
    }

    return <>
        <View  style={estiloTela1.container}>
            {/*Parte de cima*/}
            <ContainerCima  {...Cima} />


            {/*Parte do meio*/}
            <ContainerMeio {...Meio} />

            {/*Parte de baixo*/}
            <View style={estiloTela1.caixa3}>
                <Text style={estiloTela1.txtcaixa3}>{comentario}</Text>

            </View>


        </View>
        {/*Fim container*/}

    </>


}


// onPress={() => navigation.navigate("Tela3")}