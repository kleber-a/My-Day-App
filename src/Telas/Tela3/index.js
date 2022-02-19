import React from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import Calendar from 'react-native-vector-icons/AntDesign'
import Clock from 'react-native-vector-icons/AntDesign'
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'


export default function Tela3({route:{params}}) {
        console.warn(params.itemSave)
        // const {itemSave} = params;

        const itemSave = params.itemSave;
        console.warn(itemSave)
        const {id,img,data,humor,color,hora,icone1,icone2,icone3,acao1,acao2,acao3, comentario } = itemSave; 
    return (

        <View style={estiloTela3.Tela} >
            <View style={estiloTela3.caixagrande}>

                <Clock style={estiloTela3.icones} name="clockcircleo" size={10} color={"gray"} >{hora}</Clock>
                <Calendar style={estiloTela3.icones} name="calendar" size={10} color={"gray"} >{data}</Calendar>

                <Image style={estiloTela3.image} source={img} />
                <Text style={[estiloTela3.txtHumor, {color : color}]}>{humor}</Text>
            </View>

            <View style={estiloTela3.caixaacao}>
                <View style={estiloTela3.caixaAcaoIcone}>
                    <MaterialC style={estiloTela3.iconeacao} name={icone1} size={40} color={"white"}  />
                    <Entypo style={estiloTela3.iconeacao} name={icone2} size={40} color={"white"} />
                    <Entypo style={estiloTela3.iconeacao} name={icone3} size={40} color={"white"} />
                </View>
                <View style={estiloTela3.caixaAcaoTexto}>
                    <Text style={estiloTela3.textoacao}>festa</Text>
                    <Text style={estiloTela3.textoacao}>esporte</Text>
                    <Text style={estiloTela3.textoacao}>cozinhar</Text>
                </View>
            </View>

            <View style={estiloTela3.caixaTexto}>
                <Text style={estiloTela3.comentario}>Hoje foi um dia muito bom. Joguei futebol no parque, cozinhei uma 
                lasanha para minha família. E à noite, fui à festa de aniversário do meu amigo.</Text>

            </View>
        </View>
    )
}

const estiloTela3 = StyleSheet.create({
    Tela: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        backgroundColor: "#E5E5E5"
    },
    caixagrande: {
        backgroundColor: "#E5E5E5",
        width: 200,
        height: 210,
        marginHorizontal: 75,
        marginTop: 40
    },
    caixa1: {
        width: "100%",
        height: 50,
        backgroundColor: "white"
    },

    icones: {
        fontSize: 16,
        textAlign: "center",
        marginTop: 10,
    },


    image: {
        width: 65,
        height: 65,
        marginLeft: "30%",
        marginTop: 40
    },

    txtHumor: {
        color: "red",
        backgroundColor: "#E5E5E5",
        width: 50,
        fontWeight: "700",
        fontSize: 22,
        marginLeft: 70,
        marginTop: 20
    },

    caixaacao: {
        width: 320,
        height: 158,
        backgroundColor: "#FFFFFF",
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 20
    },

    caixaAcaoIcone: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50%",
        flexDirection: "row",
        paddingTop: 40,
        borderRadius: 20

    },

    iconeacao: {
        marginLeft: 50,
        backgroundColor: "#304FFE",
        borderRadius: 500   
    },

    caixaAcaoTexto: {
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "50%",
        flexDirection: "row",
        borderRadius: 20
    },

    textoacao: {
        marginLeft: 48,
        fontSize: 15,
        fontWeight: "600",
        marginTop: 5
    },

    caixaTexto: {
        backgroundColor: "white",
        width: 320,
        height: 100,
        marginLeft: 20,
        marginTop: 20,
        paddingVertical: 13,
        paddingHorizontal: 20,
        borderRadius: 20
    },

    comentario: {
        fontSize: 13,
        fontWeight: "400",
        textAlign: "justify",
        color: "#000000"

    }


})