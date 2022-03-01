import React, { Component, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Atividades({ name, id }) {

    const [dados, setDados] = useState(name)
    const [dados1, setDados1] = useState()


    //Estilo do Botao
    const [borderRadius, setBorderRadius] = useState()
    const [borderWidth, setBorderWidth] = useState()
    const [borderColor, setBorderColor] = useState()
    const [botaoSelecionado, setBotaoSelecionado] = useState(false)
    const [quantidadeClick,setQuantidadeClick] = useState(0)


    function condicao() {
        if (dados === 'sports') {
            setDados1('car-sports')
        }
        if (dados === 'shopping') {
            setDados1(dados)
        }
        if (dados === 'rest') {
            setDados1('restore')
        }
        if (dados === 'party') {
            setDados1('party-popper')
        }
        if (dados === 'movies') {
            setDados1('movie')
        }
        if (dados === 'good_meal') {
            setDados1('arm-flex')
        }
        if (dados === 'games') {
            setDados1('gamepad')
        }
        if (dados === 'date') {
            setDados1('calendar')
        }
        if (dados === 'cooking') {
            setDados1('cookie')
        }
    }

    useEffect(() => { condicao() }, [])


    function selecionarBotao() {
        let contagem = 0
        if (botaoSelecionado === false ) {
                setBorderWidth(4)
                setBorderColor('blue')
                setBorderRadius(30)
                setBotaoSelecionado(true)
                contagem = contagem+1
                
                
                
                
        }
        if (botaoSelecionado === true) {
                setBorderWidth(0)
                setBorderColor('')
                setBorderRadius(0)
                setBotaoSelecionado(false)
                contagem = contagem-1
        }
    }




    return <>

        <TouchableOpacity onPress={() => {
            console.warn(''),
                selecionarBotao()
                
        }}
            style={{ marginTop: 30, width: 30 }}>
            <MaterialCommunityIcons style={{
                borderWidth: borderWidth,
                borderColor: borderColor,
                borderRadius: borderRadius,
                width: 50,
                height: 50
            }}
                size={50} name={dados1} />

        </TouchableOpacity>
    </>
}


export default Atividades;