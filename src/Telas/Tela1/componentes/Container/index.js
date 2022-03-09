import React, { useState,useEffect } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ContainerCima from './ContainerCima';
import ContainerMeio from './ContainerMeio'

import estiloTela1 from '../../estilo/estiloTela1';
import Ponto from 'react-native-vector-icons/FontAwesome'
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialI from 'react-native-vector-icons/MaterialIcons'
import Humor from '../../../Humor';



export default function Container({ created_at, activities, mood, short_description }) {

    const[pegarHumor,setPegarHumor] = useState()
    const[pegarTexto,setPegarTexto] = useState()
    const[pegarCor,setPegarCor] = useState()
    
    useEffect(()=> {
        if(mood === 'happy'){
            setPegarHumor(require('../../../../../assets/image/humores/happy.png'))
            setPegarTexto('BEM')
            setPegarCor('red')
        }
        if(mood === 'confused'){
            setPegarHumor(require('../../../../../assets/image/humores/confused.png'))
            setPegarTexto('CONFUSO')
            setPegarCor('#AFAF')
        }
        if(mood === 'nervous'){
            setPegarHumor(require('../../../../../assets/image/humores/nervous.png'))
            setPegarTexto('MAL')
            setPegarCor('blue')
        }
        if(mood === 'sad'){
            setPegarHumor(require('../../../../../assets/image/humores/sad.png'))
            setPegarTexto('TRISTE')
            setPegarCor('green')
        }
        if(mood === 'sleeping'){
            setPegarHumor(require('../../../../../assets/image/humores/sleeping.png'))
            setPegarTexto('DORMINDO')
            setPegarCor('purple')
        }
        return() => {}
    },[])

    const [data, setData] = useState('')
    const [hora, setHora] = useState('') 
    useEffect(() => {
        let date = new Date(created_at).getDate() // Data
        var meses = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
        let month = new Date(created_at).getMonth()  //Mes
        let year = new Date(created_at).getFullYear() //Ano
        let hours = new Date(created_at).getHours() //Horas
        let min = new Date(created_at).getMinutes() //Minutos
        //Set Data 
        setData(
             date + ' DE ' + meses[month].toUpperCase()
        )
        //Set Hora
        setHora(
            hours + ":" + min
        )
        return () => {
        }
    }, [])
    let daa = new Date(created_at).getMinutes()
 

        return(
            <View style={estiloTela1.container}>
                <View style={estiloTela1.caixa1}>
                    <View style={estiloTela1.caixa1image} >
                    <Image style={estiloTela1.img} source={pegarHumor}  />
                    </View>
                    <View style={estiloTela1.caixa1TextoCima}>
                        <Text style={estiloTela1.texto1}>{data}</Text> 

                        <Text style={[estiloTela1.humor, {color: pegarCor}]}>{pegarTexto}

                        <View style={estiloTela1.viewmeio}>
                            <Text style={{ color: "#FFFF" }}>---</Text>
                        </View>

                         <Text style={estiloTela1.textoH}>{hora}</Text>

                </Text>

                </View>
                </View>
                

                <View style={estiloTela1.caixa2}>
                    {activities.map(activities => (
                        
                        <ContainerMeio {...activities}/>
                
                
                    ))}

                </View>

                <View style={estiloTela1.caixa3}>
                   <Text style={estiloTela1.txtcaixa3}>{short_description}</Text>
    
                </View>


            </View>
        )
    }


















// 


// onPress={() => navigation.navigate("Tela3")}




// let Meio = {
    //     icone1: icone1,
    //     icone2: icone2,
    //     icone3: icone3,
    //     acao1: acao1,
    //     acao2: acao2,
    //     acao3: acao3
    // }



  {/* <ContainerMeio {...icones} /> */}






//   let Cima = {
    //         id: id,
    //         img: img,
    //         data: data,
    //         humor: humor,
    //         color: color,
    //         hora: hora,
    //         mood: mood
    //     }
        
    
    
    
    //     const [icones, setIcones] = useState(activities)
    //     console.warn(icones)
    
    //     return <>
    //         <View style={estiloTela1.container}>
    //             {/*Parte de cima*/}
    //             <ContainerCima  {...Cima} />
    
    
    
    //             {icones.map(({ name, id }) => (
    
    //                 <View style={estiloTela1.caixa2} >
    
    //                     <Text>{name}</Text>
    //                     <Text>{name}</Text>
                        
    
    
    //                 </View>
    
    //             ))}
    
              
    
    //             {/*Parte de baixo*/}
    //             <View style={estiloTela1.caixa3}>
    //                 <Text style={estiloTela1.txtcaixa3}>{short_description}</Text>
    
    //             </View>
    
    
    //         </View>
    //         {/*Fim container*/}
    
    //     </>
    
    
    // }