import React, { useState, useEffect } from 'react';
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
  FlatList,
} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
const request = async (callback) => {
  const response = await fetch(
    'https://kingofcomputing.azurewebsites.net/v1/api.php?apicall=getCli'
  );
  const parsed = await response.json();
  callback(parsed.dadosLista);
};

export default function App(props) {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    request(setRegistros);
  }, []);
  return (
      <View style={estilo.container}>
        <View>
          <Text style={estilo.titulo}></Text>
          <Text style={estilo.titulo2}>King of Computing</Text>
          <FontAwesome
            style={estilo.perfil}
            name="user-circle-o"
            size={24}
            color="black"
            onPress={() => {
              props.navigation.navigate('Perfil');
            }}
          />
        </View>
        <Text style={estilo.titulo3}>Suas Informações:</Text>
        <ScrollView>
        <View>
        <ScrollView>
          <FlatList
            data={registros}
            keyExtractor={(item) => item.codCli.toString()}
            renderItem={({ item }) => (
              <Text style={estilo.itens} placeholder="" multiline>
                Nome: {item.nomeCli} {'\n'}
                {'\n'}CPF: {item.cpfCli} {'\n'}
                {'\n'}Telefone: {item.foneCli} {'\n'}
                {'\n'}Data de Nascimento: {item.dataCli} {'\n'}
                {'\n'}
                Endereço: {item.endCli}
              </Text>
            )}
          />
          </ScrollView>
        </View>
        </ScrollView>
        <View style={estilo.sair}>
          <TouchableOpacity
            style={estilo.botao}
            onPress={() => {
              props.navigation.navigate('Principal');
            }}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0C0C0',
  },
  botao: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    textAlign: 'center',
    height: responsiveHeight(8),
    width: responsiveWidth(42),
    bottom: 15,
    left: 30,
  },
  titulo: {
    backgroundColor: 'white',
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    fontSize: 25,
    textAlign: 'left',
  },
  titulo2: {
    height: responsiveHeight(8),
    width: responsiveWidth(100),
    fontSize: 25,
    textAlign: 'left',
    bottom: 50,
  },
  perfil: {
    height: responsiveHeight(8),
    width: responsiveWidth(80),
    left: 290,
    bottom: 100,
  },
  itens: {
    left: 45,
    textAlign: 'center',
    width: 280,
    height: 290,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15,
    backgroundColor: '#DEDEDE',
    fontSize: 18,
    padding: 10,
  },
  titulo3: {
    textAlign: 'center',
    fontSize: 25,
    bottom: 20,
  },
});
