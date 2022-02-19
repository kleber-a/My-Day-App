import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from '../../../estilo/estiloTela1';
import Ponto from 'react-native-vector-icons/FontAwesome'
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialI from 'react-native-vector-icons/MaterialIcons'


export default function ContainerCima({img,data,humor,color,hora}) {
    

    return <>

        <View style={estiloTela1.caixa1}>

            <View style={estiloTela1.caixa1image} >
                <Image style={estiloTela1.img} source={img} />
            </View>

            <View style={estiloTela1.caixa1TextoCima}>
                <Text style={estiloTela1.texto1}>{data}</Text>

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