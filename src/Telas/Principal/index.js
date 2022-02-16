import * as React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import imgTelaHome from '../../../assets/image/neutral1.png'



export default function Principal(){
    return <>
       <View style={estiloPrincipal.Tela}>

       <Image style={estiloPrincipal.image} source={imgTelaHome}/>
       
       <Text style={estiloPrincipal.texto}>Você ainda não tem nenhum registro diário. Para começar, 
        toque no ícone de adicionar na tela.</Text>
    
    </View>
    </>
    
}

const estiloPrincipal = StyleSheet.create({
    Tela: {
        width: "100%",
        height: "100%",
        backgroundColor: "#E5E5E5",
        resizeMode: "cover"
    },
    image: {
        width: 48,
        height: 48,
        top: 174,
        left: 150
    },
    texto: {
        width: 258,
        height:69,
        top: 200,
        left: 50,
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
        color: '#ACACAC'
    }
})


