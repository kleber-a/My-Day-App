import React from "react";
import {Image,Text, View, TextInput, TouchableOpacity} from 'react-native'
import logo from '../../../assets/image/login.png'
import estiloLogin from "./estilo/estiloLogin";


export default function TelaLogin({ navigation }){

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name:"auxilio"}]
        })
    }

    return <>
        <View style={estiloLogin.principal}>

        <View style={estiloLogin.caixainput}>
            <Image source={logo} style={estiloLogin.imagemLogin} />

            <TextInput style={estiloLogin.entrada} placeholder="e-mail"></TextInput>

            <TextInput style={estiloLogin.entrada}  placeholder="senha"></TextInput>

            <TouchableOpacity style={estiloLogin.botao} onPress={() => entrar()} >
            <Text style={estiloLogin.textobotao}>Entrar</Text>
            </TouchableOpacity>
        </View>

        </View>
    </>
}