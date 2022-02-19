import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from '../../../estilo/estiloTela1'
import Ponto from 'react-native-vector-icons/FontAwesome'
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialI from 'react-native-vector-icons/MaterialIcons'


export default function({icone1,acao1,icone2,acao2,icone3,acao3}){
    return <>
    <View style={estiloTela1.caixa2}>
                <MaterialC style={estiloTela1.icon1} name={icone1} size={20} color={"black"} />
                <Text style={estiloTela1.txt1caixa2}>{acao1}</Text>
                <Ponto style={estiloTela1.ponto} name="circle" color={"blue"} size={4} />

                <MaterialI style={estiloTela1.icon2} name={icone2} size={20} color={"black"} />
                <Text style={estiloTela1.txt2caixa2}>{acao2}</Text>
                <Ponto style={estiloTela1.ponto} name="circle" color={"blue"} size={4} />

                <MaterialI  style={estiloTela1.icon3} name={icone3} size={20} color={"black"} />
                <Text style={estiloTela1.txt3caixa2}>{acao3}</Text>
            </View>
    
    </>
}