import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import estiloTela3 from "../estilo/estiloTela3";
import Calendar from 'react-native-vector-icons/AntDesign'
import Clock from 'react-native-vector-icons/AntDesign'


export default function Cima({hora,data,img,humor,color}) {
    return <>
        <View style={estiloTela3.caixagrande}>

            <Clock style={estiloTela3.icones} name="clockcircleo" size={10} color={"gray"} >{hora}</Clock>
            <Calendar style={estiloTela3.icones} name="calendar" size={10} color={"gray"} >{data}</Calendar>

            <Image style={estiloTela3.image} source={img} />
            <Text style={[estiloTela3.txtHumor, { color: color }]}>{humor}</Text>
        </View>
    </>
}