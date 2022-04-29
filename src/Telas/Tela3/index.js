import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import estiloTela3 from './estilo/estiloTela3';
import Cima from './Cima';
import Meio from './Meio';
import SetaVoltar from 'react-native-vector-icons/AntDesign';
import api, {getId} from '../../services/api';
import MaterialC from 'react-native-vector-icons/MaterialCommunityIcons';
import Calendar from 'react-native-vector-icons/AntDesign';
import Clock from 'react-native-vector-icons/AntDesign';

export default function Tela3({route: {params}, navigation}) {
  // const itemSave = params.itemSave;
  const {id} = params;

  const [dados, setDados] = useState({});
  const [carregando, setCarregando] = useState(true);

  const [pegarHumor, setPegarHumor] = useState();
  const [pegarTexto, setPegarTexto] = useState();
  const [pegarCor, setPegarCor] = useState();

  const [data, setData] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    async function awaitData() {
      const awaitdata = await getId(id);

      setDados(awaitdata.data);

      if (awaitdata.data.mood === 'happy') {
        setPegarHumor(require('../../../assets/image/humores/happy.png'));
        setPegarTexto('BEM');
        setPegarCor('red');
      }
      if (awaitdata.data.mood === 'confused') {
        setPegarHumor(require('../../../assets/image/humores/confused.png'));
        setPegarTexto('CONFUSO');
        setPegarCor('#AFAF');
      }
      if (awaitdata.data.mood === 'nervous') {
        setPegarHumor(require('../../../assets/image/humores/nervous.png'));
        setPegarTexto('MAL');
        setPegarCor('blue');
      }
      if (awaitdata.data.mood === 'sad') {
        setPegarHumor(require('../../../assets/image/humores/sad.png'));
        setPegarTexto('TRISTE');
        setPegarCor('green');
      }
      if (awaitdata.data.mood === 'sleeping') {
        setPegarHumor(require('../../../assets/image/humores/sleeping.png'));
        setPegarTexto('DORMINDO');
        setPegarCor('purple');
      }

      let date = new Date(awaitdata.data.created_at).getDate(); // Data
      var meses = new Array(
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro',
      );
      let month = new Date(awaitdata.data.created_at).getMonth(); //Mes
      let year = new Date(awaitdata.data.created_at).getFullYear(); //Ano
      let hours = new Date(awaitdata.data.created_at).getHours(); //Horas
      let min = new Date(awaitdata.data.created_at).getMinutes(); //Minutos
      //Set Data
      setData('HOJE, ' + date + ' DE ' + meses[month]);
      //Set Hora
      setHora(hours + ':' + min);
    }
    awaitData();
  }, [id]);
  
  return (
    <View style={estiloTela3.Tela}>
      <TouchableOpacity
        style={estiloTela3.botaoVoltar}
        onPress={() => navigation.goBack()}>
        <SetaVoltar style={estiloTela3.SetaVoltar} name="left" size={30} />
      </TouchableOpacity>

      <View style={estiloTela3.caixagrande}>
        <Clock
          style={estiloTela3.icones}
          name="clockcircleo"
          size={10}
          color={'gray'}>
          {hora}
        </Clock>
        <Calendar
          style={estiloTela3.icones}
          name="calendar"
          size={10}
          color={'gray'}>
          {data}
        </Calendar>
        {dados ? (
          <>
            <Image style={estiloTela3.image} source={pegarHumor} />
            <Text style={[estiloTela3.txtHumor, {color: pegarCor}]}>
              {pegarTexto}
            </Text>
          </>
        ) : (
          <Text>olaaa</Text>
        )}
      </View>

      {/* <Cima {...dados} /> */}

      <View style={estiloTela3.caixaacao}>
        <Meio dados={dados} carregando={carregando} />
      </View>

      <View style={estiloTela3.caixaTexto}>
        <Text style={estiloTela3.comentario}>{dados.description}</Text>
      </View>
    </View>
  );
}
