import React, { Component, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Atividades({ name, id }) {

    const [dados, setDados] = useState(name)
    const [dados1, setDados1] = useState()
    const [text, setText] = useState()


    //Estilo do Botao
    const [borderRadius, setBorderRadius] = useState(30)
    const [borderWidth, setBorderWidth] = useState(3)
    const [borderColor, setBorderColor] = useState("#ACACAC")
    const [botaoSelecionado, setBotaoSelecionado] = useState(false)
    const [contagem,setContagem] = useState([])
    const [quantidadeClick,setQuantidadeClick] = useState(0)

    const [teste,setTeste] = useState()

    

    function condicao() {
        
        if (dados === 'sports') {
            setDados1('car-sports')
            setText("carro")
        }
        if (dados === 'shopping') {
            setDados1(dados)
            setText("compras")
        }
        if (dados === 'rest') {
            setDados1('restore')
            setText("restauração")
        }
        if (dados === 'party') {
            setDados1('party-popper')
            setText("festa")
        }
        if (dados === 'movies') {
            setDados1('movie')
            setText("filme")
        }
        if (dados === 'good_meal') {
            setDados1('arm-flex')
            setText("lanche")
        }
        if (dados === 'games') {
            setDados1('gamepad')
            setText("jogar")
        }
        if (dados === 'date') {
            setDados1('calendar')
            setText("calendário")
        }
        if (dados === 'cooking') {
            setDados1('cookie')
            setText("biscoit")
        }
    }

    useEffect(() => { condicao() }, [])


    function selecionarBotao() {
        let contagem = 0
        if (botaoSelecionado === false) {
                setBorderWidth(4)
                setBorderColor('blue')
                setBorderRadius(30)
                setBotaoSelecionado(true)
                contagem = contagem+1
                
                
                
                
        }
        if (botaoSelecionado === true) {
                setBorderWidth(4)
                setBorderColor('#ACACAC')
                setBorderRadius(30)
                setBotaoSelecionado(false)
                contagem = contagem-1
        }
    }




    return <>

        <TouchableOpacity onPress={() => {
            console.warn(''),
                selecionarBotao()
                
        }}
            style={{ marginTop: 20, width: 30 }}>
            <MaterialCommunityIcons style={{
                borderWidth: borderWidth,
                borderColor: borderColor,
                borderRadius: borderRadius,
                width: 50,
                height: 50
            }}
                size={50} name={dados1} />

        </TouchableOpacity>
        <Text>{text}</Text>
    </>
}


export default Atividades;