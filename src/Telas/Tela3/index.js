import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import estiloTela3 from "./estilo/estiloTela3";
import Cima from './Cima'
import Meio from "./Meio";
import SetaVoltar from 'react-native-vector-icons/AntDesign'


export default function Tela3({route:{params}, navigation}) {
        // const itemSave = params.itemSave;
        
        const {itemSave} = params;

        const {comentario } = itemSave; 
    return (

        <View style={estiloTela3.Tela} >

            <TouchableOpacity style={estiloTela3.botaoVoltar} onPress={() => navigation.goBack()} >
                <SetaVoltar style={estiloTela3.SetaVoltar} name="left" size={30}  />
            </TouchableOpacity>

             {/*Parte de cima: Hora, Data Humor*/}
            <Cima {...itemSave}/>

             {/*Parte do meio: Icones*/}
            <Meio {...itemSave} />
            
             {/*Parte de baixo: Comentário*/}
            <View style={estiloTela3.caixaTexto}>
                <Text style={estiloTela3.comentario}>{comentario}</Text>

            </View>
        </View>
    )
}

