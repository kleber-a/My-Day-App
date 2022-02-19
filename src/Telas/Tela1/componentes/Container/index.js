import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from '../../estilo/estiloTela1';
import Ponto from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'


export default function Container({ navigation, id, img, data, humor, color, hora, icone1, icone2, icone3,
 acao1, acao2, acao3, comentario}) {
    return <>
        <View  style={estiloTela1.container}>
            {/*Parte de cima*/}
            <View style={estiloTela1.caixa1}>

                <View style={estiloTela1.caixa1image} >
                    <Image style={estiloTela1.img} source={img} />
                </View>

                <View style={estiloTela1.caixa1TextoCima}>
                    <Text style={estiloTela1.texto1}>{data}</Text>

                    <Text style={[estiloTela1.humor, {color:color}]}>{humor}
                       
                        <View style={estiloTela1.viewmeio}>
                            <Text style={{ color: "#FFFF" }}>---</Text>
                        </View>
                        
                        <Text style={estiloTela1.textoH}>{hora}</Text>
                    
                    </Text>


                </View>
            </View>


            {/*Parte do meio*/}
            <View style={estiloTela1.caixa2}>
                <MaterialC style={estiloTela1.icon1} name={icone1} size={20} color={"black"} />
                <Text style={estiloTela1.txt1caixa2}>{acao1}</Text>
                <Ponto style={estiloTela1.ponto} name="circle" color={"blue"} size={4} />

                <Entypo style={estiloTela1.icon2} name={icone2} size={20} color={"black"} />
                <Text style={estiloTela1.txt2caixa2}>{acao2}</Text>
                <Ponto style={estiloTela1.ponto} name="circle" color={"blue"} size={4} />

                <Entypo  style={estiloTela1.icon3} name={icone3} size={20} color={"black"} />
                <Text style={estiloTela1.txt3caixa2}>{acao3}</Text>
            </View>

            {/*Parte de baixo*/}
            <View style={estiloTela1.caixa3}>
                <Text style={estiloTela1.txtcaixa3}>{comentario}</Text>

            </View>


        </View>
        {/*Fim container*/}

    </>


}


// onPress={() => navigation.navigate("Tela3")}