import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-datepicker';

const Agendamento = () => {
  const [date, setDate] = useState('01-01-2022');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>

        <Text style={styles.titulo}> King of Computing </Text>


<Text style={styles.titulo1}> Selecione a data de Manutenção </Text>
        <DatePicker
          style={styles.agenda}
          date={date}
          mode="date"
          placeholder="Selecione a data"
          format="DD-MM-YYYY"
          minDate="01-01-2022"
          maxDate="01-01-2025"
          customStyles={{
            dateIcon: {
              //display: 'none',
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />

        <Text style={styles.digite}> Digite o problema com o seu computador </Text>

        <TextInput style={styles.texto} placeholder="" multiline/>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textobotao}> Enviar </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

export default Agendamento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
    position: 'absolute',
    top: 40,
  },


  textobotao:{
    color: 'white',
    textAlign: 'center',
  },

  botao:{
    width: 200,
    backgroundColor: '#51B2C1',
    height: 40,
    marginTop: 15,
    borderRadius: 8,
    justifyContent: 'center',
  },

  texto:{
    width: 250,
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
    marginTop: 15, 
    backgroundColor: '#DEDEDE',
    paddingLeft: 10,
  },
  agenda:{
    width: 250,
    height: 250,
    borderRadius: 10,
    top:150,
  },
  digite:{
   fontSize:18,
  },
  titulo1:{
   fontSize: 17,
   top:140,
  },
});