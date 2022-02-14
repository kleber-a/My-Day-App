import React from "react";
import {StyleSheet,Image, Dimensions,Text, View, TextInput, TouchableOpacity, Button} from 'react-native'
import logo from '../../../assets/image/login.png'


export default function TelaLogin({ navigation }){

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name:"Principal"}]
        })
    }

    return <>
        <View style={estilos.principal}>

        <View style={estilos.caixainput}>
            <Image source={logo} style={estilos.imagemLogin} />

            <TextInput style={estilos.entrada} placeholder="e-mail"></TextInput>

            <TextInput style={estilos.entrada}  placeholder="senha"></TextInput>

            <TouchableOpacity style={estilos.botao} onPress={() => entrar()} >
            <Text style={estilos.textobotao}>Entrar</Text>
            </TouchableOpacity>
        </View>

        </View>
    </>
}

const estilos = StyleSheet.create({

    principal: {
        backgroundColor:"#3417F1",
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },

    caixainput: {
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: "10%",
        paddingVertical: "10%"
    },

    imagemLogin: {
        resizeMode: "center",
        width: "50%",
        height: "50%",
        paddingVertical: 100,
        paddingHorizontal: "50%" 
    },

    entrada: {
        justifyContent: "center",
        height: 50,
        borderColor: 'black',
        borderWidth: 0,
        borderRadius: 10,
        marginTop: 17,
        backgroundColor: "white",
        paddingHorizontal: 20
    },

    botao: {
        justifyContent: "center",
        backgroundColor: "#DCDCDC",
        paddingVertical: 16,
        borderRadius: 10,
        marginHorizontal: "25%",
        marginTop: 50
    },
    textobotao: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "900",
        color: "#3417F1"
    }
});