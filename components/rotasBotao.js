import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Cadastro from './cadastro';
import Principal from './principal';
import Perfil from './perfil';
import Agendamento from './agendamento';


const Stack = createStackNavigator();

export default function rotasBotao(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Perfil' component={Perfil}/>
        <Stack.Screen name='Principal' component={Principal}/>
        <Stack.Screen name='Agendamento' component={Agendamento}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}