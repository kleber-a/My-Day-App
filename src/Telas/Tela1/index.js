import React from 'react'
import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import estiloTela1 from './estilo/estiloTela1';
import Container from './componentes/Container';
import Caixas from '../Tela1/componentes/Caixas'




export default function Tela1({ navigation}) {
        let itemSave = {}
    return <>

        <View style={estiloTela1.Principal}>
            <FlatList
                contentContainerStyle={{paddingBottom: 20}}
                data={Caixas}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => {
                        itemSave = item
                        navigation.navigate("Tela3", {itemSave})
                    }}>
                        <Container {...item} />
                    </TouchableOpacity>}
                keyExtractor={({ id }) => String(id)}
            />

                

        </View>
    </>
}







// const renderItem = ({
//     item: {id, img, data, humor, color, hora, icone1, icone2, icone3, acao1, acao2, acao3, comentario},
// }) => {
//     return(
//         <TouchableOpacity
//         onPress={() => {
//             ItemSave.id = id;
//             ItemSave.img = img;
//             ItemSave.data = data;
//             ItemSave.humor = humor;
//             ItemSave.color = color;
//             ItemSave.hora = hora;
//             ItemSave.icone1 = icone1;
//             ItemSave.icone2 = icone2;
//             ItemSave.icone3 = icone3;
//             ItemSave.acao1 = acao1;
//             ItemSave.acao2 = acao2;
//             ItemSave.acao3 = acao3;
//         }}>
//             <Container {...item}/>
//         </TouchableOpacity>
//     );
// };




// return <>
//     <View style={estiloTela1.Principal}>
//         <FlatList
//             data={Caixas}
//             renderItem={ renderItem }
//             keyExtractor={item => item.id}      

//         />


//     </View>
// </>
// }











{/*
<TouchableOpacity onPress={() => navigation.navigate("Tela3")} style={estiloTela1.container}>
//*Parte de cima
<View style={estiloTela1.caixa1}>
    <Image style={estiloTela1.img} source={require("../../../assets/image/humores/happy.png")} />
    <Text style={estiloTela1.texto1}>HOJE, 23 DE JANEIRO</Text>
    <Text style={estiloTela1.textoEmoji}>BEM</Text>
    <Text style={estiloTela1.textoH}>08:35</Text>
</View>

{//*Parte do meio
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

{/*Parte de baixo
<View style={estiloTela1.caixa3}>
    <Text style={estiloTela1.txtcaixa3}>Hoje foi um dia muito bom. Joguei...</Text>

</View>


</TouchableOpacity>
Fim container
*/}

