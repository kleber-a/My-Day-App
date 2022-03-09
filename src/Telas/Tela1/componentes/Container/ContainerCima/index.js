import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from '../../../estilo/estiloTela1';
import Ponto from 'react-native-vector-icons/FontAwesome'
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialI from 'react-native-vector-icons/MaterialIcons'


export default function ContainerCima({img,data,humor,color,hora,mood}) {
    

    return <>

        <View style={estiloTela1.caixa1}>
        <Happy />
            <View style={estiloTela1.caixa1image} >
                <Image style={estiloTela1.img}/>
            </View>

            <View style={estiloTela1.caixa1TextoCima}>
                <Text style={estiloTela1.texto1}>{mood}</Text>

                <Text style={[estiloTela1.humor, { color: color }]}>{humor}

                    <View style={estiloTela1.viewmeio}>
                        <Text style={{ color: "#FFFF" }}>---</Text>
                    </View>

                    <Text style={estiloTela1.textoH}>{hora}</Text>

                </Text>


            </View>
        </View>

    </>

}