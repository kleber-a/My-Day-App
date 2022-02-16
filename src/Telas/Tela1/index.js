import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from './estilo/estiloTela1';
import Ponto from 'react-native-vector-icons/FontAwesome'

export default function Tela1({navigation}) {
    return <>
        <View style={estiloTela1.Principal}>


            <TouchableOpacity onPress={() => navigation.navigate("Tela3")} style={estiloTela1.container}>
                {/*Parte de cima*/}
                <View style={estiloTela1.caixa1}>
                    <Image style={estiloTela1.img} source={require("../../../assets/image/humores/happy.png")} />
                    <Text style={estiloTela1.texto1}>HOJE, 23 DE JANEIRO</Text>
                    <Text style={estiloTela1.textoEmoji}>BEM</Text>
                    <Text style={estiloTela1.textoH}>08:35</Text>
                </View>

                {/*Parte do meio*/}
                <View style={estiloTela1.caixa2}>
                    <Image style={estiloTela1.icon1} source={require("../../../assets/image/atividades/party.png")} />
                    <Text style={estiloTela1.txt1caixa2}>festa</Text>
                    <Ponto style={estiloTela1.ponto} name="circle" color={"blue"} size={4} />

                    <Image style={estiloTela1.icon2} source={require("../../../assets/image/atividades/sports.png")} />
                    <Text style={estiloTela1.txt2caixa2}>esporte</Text>
                    <Ponto style={estiloTela1.ponto} name="circle" color={"blue"} size={4} />

                    <Image style={estiloTela1.icon3} source={require("../../../assets/image/atividades/cooking.png")} />
                    <Text style={estiloTela1.txt3caixa2}>cozinhar</Text>
                </View>

                {/*Parte de baixo*/}
                <View style={estiloTela1.caixa3}>
                    <Text style={estiloTela1.txtcaixa3}>Hoje foi um dia muito bom. Joguei...</Text>

                </View>


            </TouchableOpacity>
            {/*Fim container*/}



        </View>
    </>
}

