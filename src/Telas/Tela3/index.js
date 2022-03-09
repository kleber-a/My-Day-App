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
        if(dados.mood === 'happy' && dados ===true){
            setPegarHumor(require('../../../assets/image/humores/happy.png'))
            setPegarTexto('BEM')
            setPegarCor('red')
        }
        if(dados.mood === 'confused' && dados ===true){
            setPegarHumor(require('../../../assets/image/humores/confused.png'))
            setPegarTexto('CONFUSO')
            setPegarCor('#AFAF')
        }
        if(dados.mood === 'nervous' && dados ===true){
            setPegarHumor(require('../../../assets/image/humores/nervous.png'))
            setPegarTexto('MAL')
            setPegarCor('blue')
        }
        if(dados.mood === 'sad' && dados ===true){
            setPegarHumor(require('../../../assets/image/humores/sad.png'))
            setPegarTexto('TRISTE')
            setPegarCor('green')
        }
        if(dados.mood === 'sleeping' && dados ===true){
            setPegarHumor(require('../../../assets/image/humores/sleeping.png'))
            setPegarTexto('DORMINDO')
            setPegarCor('purple')
        }



        return() => {}
    },[])

    const [data, setData] = useState('')
    const [hora, setHora] = useState('')    
    useEffect(() => {
        let date = new Date().getDate(dados.created_at) // Data
        var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
        let month = new Date().getMonth(dados.created_at)  //Mes
        let year = new Date().getFullYear(dados.created_at) //Ano
        let hours = new Date().getHours(dados.created_at) //Horas
        let min = new Date().getMinutes(dados.created_at) //Minutos
        //Set Data 
        setData(
            'HOJE, ' + date + ' DE ' + meses[month].toUpperCase()
        )
        //Set Hora
        setHora(
            hours + ":" + min
        )
        return () => {
        }
    }, [])
    
    const dia = new Date().getDate(dados.created_at)

    


console.warn(data)
    

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

