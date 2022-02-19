import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import imgTelaHome from '../../../assets/image/neutral1.png'


export default function Tela2(){
    return (
        <View >
            <Text style={estiloTela2.texto}>Menu</Text>

        </View>
    )
}

const estiloTela2 = StyleSheet.create({
    texto: {
        fontSize: 100,
        textAlign: "center",
        marginTop: 200
    }
})