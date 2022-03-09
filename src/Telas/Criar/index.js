import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native';
import { View, Text, Modal, Button, TextInput, FlatList } from 'react-native'
import estiloTelaCriacao from '../Criacao/estiloCriacao';
import api, { getUseractives } from '../../services/api';
import Atividades from '../Atividades'
import Close from 'react-native-vector-icons/AntDesign'
import Calendar from 'react-native-vector-icons/AntDesign'
import Clock from 'react-native-vector-icons/AntDesign'
import Humor from '../Humor';
import User from '../User';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'




function Criar({ navigation }) {



    const [Humorr, setHumorr] = useState(Humor)


    const [carregando, setCarregando] = useState(true)
    const [modalVisible, setmodalVisible] = useState(true)
    const [atividades, setAtividades] = useState([])
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')


    useEffect(() => {
        let date = new Date().getDate() // Data
        var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
        let month = new Date().getMonth()  //Mes
        let year = new Date().getFullYear() //Ano
        let hours = new Date().getHours() //Horas
        let min = new Date().getMinutes() //Minutos
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


    useEffect(() => {//Pegando dados pela API
        async function getStorage() {
            api.get("activities/")
                .then(response => {
                    const data = response.data
                    setAtividades(data)
                })
                .catch(error => console.log(error))
                .finally(() => setCarregando(false))
        }
        getStorage()

    }, [])


    const [humor, setHumor] = useState([])
    const [comentario, setComentario] = useState('')

 // const date = new Date(created_at)

    const [user1,setUser1] = useState({
        daily_entry: {
            mood: 'nervous',
            activity_ids: [1, 5, 3],       
            description: "testee",        
            username: "KleberAndrade"    
        }
    })  
   
    function postApi(valor){
        api.post("daily_entries/",valor)
        .then(response =>{
            const data = response.data  
            console.warn(data)
        })
        .catch(error => console.warn(error))
    }
    



    return (
        <Modal animationType='slide' visible={modalVisible}>
            <View style={estiloTelaCriacao.modal}>

                <TouchableOpacity onPress={() => navigation.goBack()} style={estiloTelaCriacao.botaoVoltar}>
                    <Close style={estiloTelaCriacao.xVoltar} name="close" size={30} />
                </TouchableOpacity>

                {/*Parte de cima--------------------------------------------------*/}
                <View style={estiloTelaCriacao.caixa1}>

                    <Text style={estiloTelaCriacao.h1}>Como você esta?</Text>

                    <View style={estiloTelaCriacao.caixaDate}>

                        <Calendar style={estiloTelaCriacao.icones} name="calendar" size={10} color={"gray"} > {data}</Calendar>
                        <Clock style={estiloTelaCriacao.icones} name="clockcircleo" size={10} color={"gray"} > {hora}</Clock>
                    </View>

                    <View style={estiloTelaCriacao.emoji}>
                        {Humorr.map(({ nome, source, id,name }) => {
                            const [borderRadius, setBorderRadius] = useState()
                            const [borderWidth, setborderWidth] = useState()
                            const [borderColor, setborderColor] = useState()
                            const [humor2, setHumor2] = useState(() => ({
                                nome: '',
                                ativo: false
                            }))
                            const [selecaoHumor, setSelecaoHumor] = useState(false)

                            function pegarhumor(nomehumor, id) {


                                if (humor2.nome === '' && selecaoHumor === false) {
                                    setBorderRadius(25)
                                    setborderWidth(3)
                                    setborderColor('blue')
                                    setHumor(nomehumor)
                                    setSelecaoHumor(true)
                                    setHumor2((prev) => ({
                                        nome: prev.nome = nomehumor,
                                        ativo: prev.ativo = true
                                    }))

                                }

                                if (humor2.name !== '' && selecaoHumor === true) {
                                    setBorderRadius()
                                    setborderWidth()
                                    setborderColor()
                                    setHumor('')
                                    setSelecaoHumor(false)
                                    setHumor2((prev) => ({
                                        nome: prev.nome = '',
                                        ativo: prev.ativo = false
                                    }))

                                }



                            }



                            return (
                                <TouchableOpacity key={id} onPress={() => pegarhumor(name, id)} 
                                style={estiloTelaCriacao.humores}>
                                    <Image style={[estiloTelaCriacao.img, 
                                        { borderWidth: borderWidth, borderColor: borderColor, borderRadius: borderRadius }]}
                                         source={source} />
                                    <Text>{nome}</Text>



                                </TouchableOpacity>
                            )
                        }
                        )}





                    </View>
                   

                </View>









                <View style={estiloTelaCriacao.caixaselecao}>

                    {atividades.map(atividades => (
                        <Atividades key={atividades.id} {...atividades} />   

                        
                    ))}

                    {/* <FlatList
                            data={atividades}
                            keyExtractor={item => item.id.toString()}
                            numColumns={3}
                            renderItem={({ item }) =>

                                <Atividades  {...item} />
                            }
                        />  */}

                    {/* <Atividades   {...atividades} /> */}

                </View>



                <View style={estiloTelaCriacao.caixacomentario}>
                    <TextInput
                        onChangeText={text => setComentario(text)}
                        value={comentario}
                        placeholder="Escreva aqui..."></TextInput>
                </View>

                <TouchableOpacity style={estiloTelaCriacao.botaao}
                     onPress={() => {[ postApi(user1) ,navigation.navigate("MyTabs") ]}}>
                    <Text style={{ fontSize: 15, color: 'white' }}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


export default Criar;


























// {useState(atividades).map(atividades => (

//     <Atividades  {...atividades} />

// ))}

