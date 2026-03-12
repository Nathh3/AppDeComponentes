import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }):any {
  return (
    <View>
      <Text>Homes Screen</Text>
      <Button 
        title='Ejemplo de texto'
        onPress={() => navigation.navigate("Texto")}
      />
      <Button
        title='Ejemplo Input'
        onPress={() => navigation.navigate("Input")}
      />
      <Button
        title='Ejemplo de Botones'
        onPress={() => navigation.navigate("Boton")}
      />
      <Button
        title='Ejemplo de Lista'
        onPress={() => navigation.navigate("Lista")}
      />
        <Button
        title='Ejemplo de Modal'
        onPress={() => navigation.navigate("Modal")}
      />
      
    </View>
  
  )
}

const styles = StyleSheet.create({

})