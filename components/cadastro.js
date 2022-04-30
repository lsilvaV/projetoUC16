import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { useForm } from 'react-hook-form';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

export default function App(props) {
  return (
    <ScrollView>
      <View style={estilo.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={estilo.titulo}>Nome</Text>
            <TextInput style={estilo.barras} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={estilo.titulo}>Endereço</Text>
            <TextInput style={estilo.barras} />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={estilo.titulo}>Telefone</Text>
            <TextInput style={estilo.barras} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <Text style={estilo.titulo}>Documento</Text>
            <TextInput style={estilo.barras} />
          </View>
        </View>
        <Text style={estilo.titulo}>E-mail</Text>
        <TextInput style={estilo.barras2} />
        <Text style={estilo.titulo}>Senha</Text>
        <TextInput secureTextEntry={true} style={estilo.barras2} />
      </View>
      <View>
        <TouchableOpacity
          style={estilo.botao}
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Text style={estilo.cadastro}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    padding: 10,
    fontSize: 18,
  },
  barras: {
    margin: 10,
    padding: 10,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    textAlign: 'left',
    height: responsiveHeight(6),
    width: responsiveWidth(42),
  },
  barras2: {
    margin: 10,
    padding: 10,
    backgroundColor: '#DCDCDC',
    borderRadius: 10,
    textAlign: 'left',
    height: responsiveHeight(6),
    width: responsiveWidth(90),
  },
  botao: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(42),
  },
});
