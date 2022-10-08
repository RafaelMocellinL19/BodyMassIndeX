import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {


  
  return (
    <View style={styles.container}>
      <View style={styles.entradas}>
        <TextInput placeholder='Altura' keyboardType='numeric' style={styles.input} />
        <TextInput placeholder='Massa' keyboardType='numeric' style={styles.input} />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => { }} ><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
      <Text style={styles.resultado}>00.00</Text>
      <Text style={[styles.resultado , {fontSize:35}]}>Condição:</Text>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6dc4a4',
   
  },
  entradas: {
  flexDirection:'row',
},

  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 50,
    marginTop: 24,
    color:'fff',
  },
  button: {
    backgroundColor: "#89ffa5",
  },
  buttonText: {
    textAlign: 'center',
    padding: 30,
    fontSize: 25,
    color: '#6dc4a4',
    fontWeight:'bold',
  },
  resultado: {
    textAlign: 'center',
    color: '#89ffa5',
    fontSize: 65,
    padding: 15,
    
  }

});
