import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeScreen from '../Pantallas/HomeScreen';
import EjemploText from '../Pantallas/EjemploText';
import EjemploInput from '../Pantallas/EjemploInput';
import EjemploBoton from '../Pantallas/EjemploBoton';
import EjemploLista from '../Pantallas/EjemploLista';
import EjemploModal from '../Pantallas/EjemploModal';

const Stack = createNativeStackNavigator();

export default function StackNavigator () {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Welcome to Home Screen" component={HomeScreen}/>
                <Stack.Screen name = "Texto" component={EjemploText}/>
                <Stack.Screen name = "Input" component={EjemploInput}/>
                <Stack.Screen name = "Boton" component={EjemploBoton}/>
                <Stack.Screen name = "Lista" component={EjemploLista}/>
                <Stack.Screen name = "Modal" component={EjemploModal}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
