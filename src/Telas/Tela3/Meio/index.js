import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import estiloTela3 from "../estilo/estiloTela3";
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialI from 'react-native-vector-icons/MaterialIcons'


export default function Meio({ icone1, icone2, icone3, acao1, acao2, acao3 }) {
    return <>
        <View style={estiloTela3.caixaacao}>
            <View style={estiloTela3.caixaAcaoIcone}>

                <MaterialC style={estiloTela3.iconeacao} name={icone1} size={42} color={"white"} />

                <MaterialI style={estiloTela3.iconeacao} name={icone2} size={42} color={"white"} />

                <MaterialI style={estiloTela3.iconeacao} name={icone3} size={42} color={"white"} />


            </View>
            <View style={estiloTela3.caixaAcaoTexto}>
                <Text style={estiloTela3.textoacao}>{acao1}</Text>
                <Text style={estiloTela3.textoacao}>{acao2}</Text>
                <Text style={estiloTela3.textoacao}>{acao3}</Text>
            </View>
        </View>
    </>
}