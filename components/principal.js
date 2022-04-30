import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  KeyboardView,
  Title,
  Container,
  Input,
  ButtonSubmit,
  TextButton,
  TextInput,
  Appearance,
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function App(props) {
  return (
    <View>
      <View style={estilo.container}>
        <View>
          <Text style={estilo.titulo}></Text>
          <Text style={estilo.titulo2}>King of Computing</Text>
        </View>

        <FontAwesome
          style={estilo.perfil}
          name="user-circle-o"
          size={24}
          color="black"
          onPress={() => {
            props.navigation.navigate('Perfil');
          }}
        />

        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('Agendamento');
          }}>
          <View style={{ flexDirection: 'column' }}>
            <Text>Faça seu agendamento</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('Principal');
          }}>
          <Text>Consulte seu agendamento</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'column' }}></View>
      </View>
      <Image style={estilo.imagem} source={require('../assets/pc.png')} />
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagem: {
    height: responsiveHeight(40),
    width: responsiveWidth(81),
    resizeMode: 'cover',
    borderRadius: 10,
    borderColor: '#4CA5B3',
    left: 39,
    top:280,
  },

  titulo: {
    margin: 1,
    padding: 1,
    backgroundColor: 'white',
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    fontSize: 25,
    textAlign: 'left',
  },
  titulo2: {
    margin: 1,
    padding: 1,
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    fontSize: 25,
    textAlign: 'left',
    bottom: 50,
    left:15,
  },

  botao: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    height: responsiveHeight(10),
    width: responsiveWidth(80),
    alignItems: 'center',
    left: 30,
    top: 30,
  },
  perfil: {
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    left: 290,
    top: 15,
  },
});
