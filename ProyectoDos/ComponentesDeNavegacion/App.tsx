import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/Navegacion/StackNavigator';



export default function App() {

  return <StackNavigator /> 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#68266e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
