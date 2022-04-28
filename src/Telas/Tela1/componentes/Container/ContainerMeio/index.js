import React, {useState,useEffect} from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from '../../../estilo/estiloTela1'
import Ponto from 'react-native-vector-icons/FontAwesome'
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialI from 'react-native-vector-icons/MaterialIcons'


export default function ContainerMeio ({ id, name }) {


    const [icone,setIcone] = useState()
    const [texto,setTexto] = useState()


    function condicao() {
        if (name === 'sports') {
            setIcone('car-sports'),
             setTexto('dirigir') 
         }
         if (name === 'shopping') {
                 setIcone(name),
                 setTexto('compras')
         }
         if (name === 'rest') {
                 setIcone('walk'),
                 setTexto('correr')
         }
         if (name === 'party') {
                 setIcone('party-popper')
                 setTexto('festa')
         }
         if (name === 'movies') {
                 setIcone('movie'),
                 setTexto('filme')
         }
         if (name === 'good_meal') {
                 setIcone('arm-flex'),
                 setTexto('malhaçao')
         }
        
         if (name === 'games') {
                 setIcone('gamepad'),
                 setTexto('jogar')
         }
         if (name === 'date') {
                 setIcone('calendar'),
                 setTexto('planjear')
         }
         if (name === 'cooking') {
                 setIcone('cookie'),
                 setTexto('comer')
         }
        }
    
    useEffect(() => { condicao() }, [])



    return (

        <>
            <MaterialC style={estiloTela1.icon1} name={icone} size={20} color={"black"} />
            <Text style={estiloTela1.txt1caixa2}>{texto}</Text>
            <Ponto style={estiloTela1.ponto} name="circle" color={"blue"} size={4} />

        </>

    )
}