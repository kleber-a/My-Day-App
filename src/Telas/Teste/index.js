import React, { useState, useEffect } from 'react'
import { TouchableOpacity, Image } from 'react-native';
import { View, Text, Modal, Button, TextInput, FlatList } from 'react-native'
import estiloTelaCriacao from '../Criacao/estiloCriacao';
import api, { getUseractives } from '../../services/api';
import Atividades from '../Atividades'
import Close from 'react-native-vector-icons/AntDesign'
import Calendar from 'react-native-vector-icons/AntDesign'
import Clock from 'react-native-vector-icons/AntDesign'
//Icons//
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'



function Teste({ navigation }) {
    const [carregando, setCarregando] = useState(true)
    const [modalVisible, setmodalVisible] = useState(true)
    const [atividades, setAtividades] = useState([])
    const [data, setData] = useState('')
    const [hora, setHora] = useState('')
    let [contador, setContador] = useState(0)



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


    useEffect(() => {

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


    useEffect(() => {
        
        function contagemBotao(){
            let contadorr = 0
            
            setContador(contadorr+1)
        }

    
    }, [contador])



    console.warn(contador)


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

                        <TouchableOpacity style={estiloTelaCriacao.humores}>
                            <Image style={estiloTelaCriacao.img} source={require("../../../assets/image/humores/happy.png")} />
                            <Text>Bem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estiloTelaCriacao.humores}>
                            <Image style={estiloTelaCriacao.img} source={require("../../../assets/image/humores/happy.png")} />
                            <Text>Bem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estiloTelaCriacao.humores}>
                            <Image style={estiloTelaCriacao.img} source={require("../../../assets/image/humores/happy.png")} />
                            <Text>Bem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estiloTelaCriacao.humores}>
                            <Image style={estiloTelaCriacao.img} source={require("../../../assets/image/humores/happy.png")} />
                            <Text>Bem</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={estiloTelaCriacao.humores}>
                            <Image style={estiloTelaCriacao.img} source={require("../../../assets/image/humores/happy.png")} />
                            <Text>Bem</Text>
                        </TouchableOpacity>

                    </View>
                </View>









                <View style={estiloTelaCriacao.caixaselecao}>

                    {atividades.map(atividades => (
                        <Atividades {...atividades} />
                    ))}
                    {/* <FlatList
                            data={atividades}
                            keyExtractor={item => item.id.toString()}
                            numColumns={3}
                            renderItem={({ item }) =>

                                <Atividades style={estiloTelaCriacao.dividerActivity1} {...item} />
                            }
                        /> */}

                </View>









                <View style={estiloTelaCriacao.caixacomentario}>
                    <TextInput placeholder="Escreva aqui..."></TextInput>
                </View>

                <TouchableOpacity style={estiloTelaCriacao.botaao}
                    onPress={() => console.warn('Button with adjusted color pressed')}>
                    <Text style={{ fontSize: 15, color: 'white' }}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}


export default Teste;



{/* <TouchableOpacity onPress={() =>{ console.warn(atividades[0].name) }} style={{marginTop:10,width:30}}>
                <MaterialIcons size={30} name={atividades[0].name} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{ console.warn(atividades[1].name) }} style={{marginTop:10,width:30}}>
                <MaterialCommunityIcons size={30} name={atividades[1].name} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{ console.warn(atividades[2].name) }} style={{marginTop:10,width:30}}>
                <AntDesign size={30} name={atividades[2].name} />
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() =>{ console.warn(atividades[3].name) }} style={{marginTop:10,width:30}}>
                <MaterialCommunityIcons size={30} name={`${atividades[1].name}-popper`} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{ console.warn(atividades[4].name) }} style={{marginTop:10,width:30}}>
                <Text style={{fontSize: 20}}>{atividades[4].name}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{ console.warn(atividades[5].name) }} style={{marginTop:10,width:30}}>
                <Text style={{fontSize: 20}}>{atividades[5].name}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{ console.warn(atividades[6].name) }} style={{marginTop:10,width:30}}>
                <Text style={{fontSize: 20}}>{atividades[6].name}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{ console.warn(atividades[7].name) }} style={{marginTop:10,width:30}}>
                <Text style={{fontSize: 20}}>{atividades[7].name}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() =>{ console.warn(atividades[8].name) }} style={{marginTop:10,width:30}}>
                <Text style={{fontSize: 20}}>{atividades[8].name}</Text>
                </TouchableOpacity> */}









// useEffect(()=>{
//     async function saveStorage(){
//         await AsyncStorage.setItem('nomes', name)
//     }

//     saveStorage()

// }, [name])






// {useState(atividades).map(atividades => (

//     <Atividades  {...atividades} />

// ))}


// function alterarName(){
//     setName(input)
//     setInput('')
// }




{/* <Text>{name}</Text>
<TextInput value={input} placeholder="Digite aqui" onChangeText={(texto)=> setInput(texto)} ></TextInput>
<Button
    title="alterar nome"
    onPress={alterarName}
/>

<Text>Descer Modal</Text>
<Button
    title="Descer Modal"
    onPress={() => setmodalVisible(false)}
/> */}