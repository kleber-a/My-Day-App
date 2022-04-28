import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import estiloTela3 from "./estilo/estiloTela3";
import Cima from './Cima'
import Meio from "./Meio";
import SetaVoltar from 'react-native-vector-icons/AntDesign'
import api from "../../services/api";
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import Calendar from 'react-native-vector-icons/AntDesign'
import Clock from 'react-native-vector-icons/AntDesign'


export default function Tela3({ route: { params }, navigation }) {
    // const itemSave = params.itemSave;
    const { id } = params;

    const [dados, setDados] = useState({})
    const [carregando, setCarregando] = useState(true)


    useEffect(() => {
        api.get("daily_entries/" + id)
            .then(async response => {
                const data = response.data
                setDados(data)
            })
            .catch(error => console.log(error))
            .finally(() => setCarregando(false))

    }, [id])
    console.warn(dados)

    const[pegarHumor,setPegarHumor] = useState()
    const[pegarTexto,setPegarTexto] = useState()
    const[pegarCor,setPegarCor] = useState()
    
    useEffect(()=> {
        if(dados.mood === 'happy' ){
            setPegarHumor(require('../../../assets/image/humores/happy.png'))
            setPegarTexto('BEM')
            setPegarCor('red')
        }
        if(dados.mood === 'confused' ){
            setPegarHumor(require('../../../assets/image/humores/confused.png'))
            setPegarTexto('CONFUSO')
            setPegarCor('#AFAF')
        }
        if(dados.mood === 'nervous' ){
            setPegarHumor(require('../../../assets/image/humores/nervous.png'))
            setPegarTexto('MAL')
            setPegarCor('blue')
        }
        if(dados.mood === 'sad' ){
            setPegarHumor(require('../../../assets/image/humores/sad.png'))
            setPegarTexto('TRISTE')
            setPegarCor('green')
        }
        if(dados.mood === 'sleeping' ){
            setPegarHumor(require('../../../assets/image/humores/sleeping.png'))
            setPegarTexto('DORMINDO')
            setPegarCor('purple')
        }



        return() => {}
    },[])

    const [data, setData] = useState('')
    const [hora, setHora] = useState('')    
    useEffect(() => {
        let date = new Date(dados.created_at).getDate() // Data
        var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
        let month = new Date(dados.created_at).getMonth()  //Mes
        let year = new Date(dados.created_at).getFullYear() //Ano
        let hours = new Date(dados.created_at).getHours() //Horas
        let min = new Date(dados.created_at).getMinutes() //Minutos
        //Set Data 
        setData(
            'HOJE, ' + date + ' DE ' + meses[month]
        )
        //Set Hora
        setHora(
            hours + ":" + min
        )
        return () => {
        }
    }, [])
    
    const dia = new Date().getDate(dados.created_at)

    

    

    return (
        <View style={estiloTela3.Tela} >

            <TouchableOpacity style={estiloTela3.botaoVoltar} onPress={() => navigation.goBack()} >
                <SetaVoltar style={estiloTela3.SetaVoltar} name="left" size={30} />
            </TouchableOpacity>

            <View style={estiloTela3.caixagrande}>
                
                <Clock style={estiloTela3.icones} name="clockcircleo" size={10} color={"gray"} >{hora}</Clock>
                <Calendar style={estiloTela3.icones} name="calendar" size={10} color={"gray"} >{data}</Calendar>
            
                     <Image style={estiloTela3.image} source={pegarHumor} />
                     <Text style={[estiloTela3.txtHumor, { color: pegarCor }]}>{pegarTexto}</Text>

            </View>



            {/* <Cima {...dados} /> */}

            <View style={estiloTela3.caixaacao}>
                <Meio dados={dados} carregando={carregando} />
            </View>


            <View style={estiloTela3.caixaTexto}>
                <Text style={estiloTela3.comentario}>{dados.description}</Text>
            </View>

        </View>
    )


}

