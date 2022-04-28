import React, { Component, useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


function Atividades({ name, id}) {

    
    //Estilo do Botao

        
    const [guardar,setGuardar] = useState(() => ({
        nameFinal: '',
        nameText: ''
    }))

    
    const [icone,setIcone] = useState()
    const [texto,setTexto] = useState()


    function condicao() {
        if (name === 'sports') {
            setIcone('car-sports'),
             setTexto('dirigir')
           
         }
        
         if (name === 'shopping') {
                 setIcone(name),
                 setTexto('compras')
        
         }
        
        
         if (name === 'rest') {
                 setIcone('walk'),
                 setTexto('caminhar')
         
             
          
         }
        
        
         if (name === 'party') {
                 setIcone('party-popper')
                 setTexto('festa')
             
        
            
         }
         if (name === 'movies') {
                 setIcone('movie'),
                 setTexto('filme')
        
         }
         if (name === 'good_meal') {
                 setIcone('arm-flex'),
                 setTexto('malhaçao')
         
        
         }
        
         if (name === 'games') {
                 setIcone('gamepad'),
                 setTexto('jogar')
         
        
         }
         if (name === 'date') {
                 setIcone('calendar'),
                 setTexto('planjear')
             
        
         }
         if (name === 'cooking') {
                 setIcone('cookie'),
                 setTexto('comer')
             
         }
        }
    
    useEffect(() => { condicao() }, [])

    


        const[borderColor,setBorderColor] = useState('black')
        const[corfundo,setCorfundo] = useState('white')
        const[cor,setCor] = useState('black')
        const[borderwidth,setBorderwidth] = useState(2)
        const[borderradius,setBorderradius] = useState(20)
        const[selecao,setSelecao] = useState(false)
        const[contagem, setContagem] = useState([])
        function selecionar(){
            if(selecao === false){
                setBorderColor("blue")
                setCorfundo('blue')
                setCor('white')
                setBorderradius(25)
                setBorderwidth(3)
                setSelecao(true)
            }
            if(selecao === true){
                setBorderColor("black")
                setCorfundo('white')
                setCor('black')
                setBorderradius(25)
                setBorderwidth(3)
                setSelecao(false)
                
            }
        }
    return (

        <TouchableOpacity 
        style={{ 
            alignItems:'center' ,
            margin:15,
           
        }}
        onPress={() => {selecionar()}}>

                    
                    <MaterialCommunityIcons style={{
                        width: 40,
                        height: 40,
                        borderWidth: borderwidth,
                        borderRadius: borderradius,
                        borderColor: borderColor,
                        backgroundColor: corfundo,
                        color: cor
                    }} 
                    
                    color={'black'}  size={40} name={icone}/>
                    <Text style={{fontSize: 15}}>{texto}</Text>
            
        </TouchableOpacity>
        
        )
}


export default Atividades;






// function selecionarBotao({id}) {
        
//     if (botaoSelecionado === false) {
//             setBorderWidth(4)
//             setBorderColor('blue')
//             setBorderRadius(30)
//             setBotaoSelecionado(true)
//             setValor((prev) => ({
//                 total: prev.activies.length + 1,
//                 activies: [...prev.activies, guardar.nameFinal]
//             }))
            
            
                            
//     }
//     if (botaoSelecionado === true) {
//             setBorderWidth(4)
//             setBorderColor('#ACACAC')
//             setBorderRadius(30)
//             setBotaoSelecionado(false)
//             setValor((prev) => ({
//                 total: prev.activies.length - 1,
//                 activies: prev.activies.slice(0, -1)
//             }))
//     }
// }



