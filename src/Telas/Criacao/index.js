import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Button, FlatList, TextInput } from 'react-native'
import estiloTelaCriacao from "./estiloCriacao";
import imgTelaHome from '../../../assets/image/neutral1.png'
import Calendar from 'react-native-vector-icons/AntDesign'
import Clock from 'react-native-vector-icons/AntDesign'
import Close from 'react-native-vector-icons/AntDesign'
import api from "../../services/api";
import Atividades from "../Atividades";
import { NavigationContainer } from "@react-navigation/native";
//Icon================================================================
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
//====================================================================


export default class Criacao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: true,
            atividades: []
        }
        this.navigation
    }

    async componentDidMount() {
        const response = await api.get('activities/')
        this.setState({
            atividades: response.data
        })

    }

    render() {
        return (

            <Modal animationType="slide" transparent={true}>
                <View style={estiloTelaCriacao.modal}>

                    <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={estiloTelaCriacao.botaoVoltar}>
                        <Close style={estiloTelaCriacao.xVoltar} name="close" size={30} />
                    </TouchableOpacity>

                    {/*======================Parte de Cima=============================================*/}

                    <View style={estiloTelaCriacao.caixa1}>

                        <Text style={estiloTelaCriacao.h1}>Como você esta?</Text>

                        <View style={estiloTelaCriacao.caixaDate}>
                            <Calendar style={estiloTelaCriacao.icones} name="calendar" size={10} color={"gray"} >  Hoje, 23 DE JANEIRO</Calendar>
                            <Clock style={estiloTelaCriacao.icones} name="clockcircleo" size={10} color={"gray"} >  08:35</Clock>
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
                    {/*==================================================================*/}

                    <View style={estiloTelaCriacao.caixaselecao}>
                        {console.warn(this.state.atividades)}
                        
                        

                        {/* 
                        
                         {this.state.atividades.map(atividades => (
                            
                            <Atividades  {...atividades} />

                             ))} 
                        
                            <FlatList
                            data={this.state.atividades}
                            keyExtractor={item => item.id.toString()}
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
}


