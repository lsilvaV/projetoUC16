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
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function App(props) {
  return (
    <ScrollView>
      <View>
        <View>
          <Image style={estilo.imagem} source={require('../assets/pc.png')} />
        </View>

        <View style={estilo.container}>
          <View style={estilo.usuario}>
            <Text style={estilo.titulo}>Usuario</Text>
            <TextInput style={estilo.barras} />
          </View>
          <View>
            <Text style={estilo.titulo}>Senha</Text>
            <TextInput secureTextEntry={true} style={estilo.barras} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={estilo.botao}
              onPress={() => {
                props.navigation.navigate('Principal');
              }}>
              <Text style={estilo.logar}>Logar</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={estilo.cadastro}
              onPress={() => {
                props.navigation.navigate('Cadastro');
              }}>
              <Text>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    height: responsiveHeight(50),
    width: responsiveWidth(50),
  },
  botao: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(42),
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
    left: 8,
  },
  cadastro: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(42),
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
    left:10,
  },
  titulo: {
    padding: 11,
    fontSize: 18,
    top: 15,
  },
  imagem: {
    height: responsiveHeight(40),
    width: responsiveWidth(78),
    resizeMode: 'cover',
    borderRadius: 10,
    borderColor: '#4CA5B3',
    left: 39,
    top: 10,
  },
  barras: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'left',
    height: responsiveHeight(6),
    width: responsiveWidth(90),
    shadowColor: '#470000',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.2,
    elevation: 1,
    left:8,
  },
});
