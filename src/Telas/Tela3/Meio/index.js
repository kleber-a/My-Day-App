import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import estiloTela3 from "../estilo/estiloTela3";
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialI from 'react-native-vector-icons/MaterialIcons'



export default function Meio(props) {


    function condicaoicone(name) {
        if (name === 'sports') {  const name = 'car-sports'
        return  name    
         }
         if (name === 'shopping') {const name = 'shpping'
                 return  name 
         }
         if (name === 'rest') {const name = 'walk'
                 return  name
         }        
         if (name === 'party') { const name = 'party-popper'
                 return  name 
         }
         if (name === 'movies') { const name = 'movie'
                 return  name
         }
         if (name === 'good_meal') { const name = 'arm-flex'
                 return  name
         }
         if (name === 'games') { const name = 'gamepad'
                 return  name
         }
         if (name === 'date') {  const name = 'calendar'
                 return  name
         }
         if (name === 'cooking') { const name = 'cookie'
                 return  name      
         }
        }
        function condicaotexto(name) {
            if (name === 'sports') {   
                 const name = 'carro'
                     return  name    
             }
             if (name === 'shopping') {
                    const name = 'compras'
                     return  name 
             }
             if (name === 'rest') {
                     const name = 'caminhar'
                     return  name
             }        
             if (name === 'party') {
                     const name = 'festa'
                     return  name 
             }
             if (name === 'movies') {
                     const name = 'filme'
                     return  name
             }
             if (name === 'good_meal') {
                     const name = 'malhaçao'
                     return  name
             }
             if (name === 'games') {
                 const name = 'jogar'
                     return  name
             }
             if (name === 'date') {
                     const name = 'planjear'
                     return  name
             }
             if (name === 'cooking') {
                     const name = 'comer'
                     return  name      
             }
            }




    return (

        <View style={estiloTela3.caixaAcaoIcone}>
            {props.dados.activities && props.dados.activities.map(activities => 
                (
                <View style={{backgroundColor:'#FFFFFF',marginHorizontal:20}}>
                <View style={estiloTela3.iconeacao} >
                    <MaterialC size={40} color={'white'}  name={condicaoicone(activities.name)} />
                    <Text style={{width:60,fontWeight:"800"}}>{condicaotexto(activities.name)}</Text>
                 
                </View>
                </View>
                )
            )}
        </View>
    )
}




{/* <View style={{ flexDirection: 'column', backgroundColor: 'red' }}>
                    <MaterialC style={estiloTela3.iconeacao} size={42} color={"white"} />
                    <Text>sds</Text>
                </View> */}