<<<<<<< HEAD
=======
import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';


export default function ExtratoScreen() {

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>#boraprochurras</Text>
        <Text style={styles.text}>
          Valores aproximados!
        </Text>
        {/* *************************************************************************************** */}
          <View style={styles.div}>
            <Text style={styles.subtitletext}>Carnes</Text>
            <Text style={styles.description}>Example - 1,0 kg</Text>
          </View>
          
          <View style={styles.div}>
            <Text style={styles.subtitletext}>Bebidas</Text>
            <Text style={styles.description}>Example - 1,0 L</Text>
          </View>
          
          <View style={styles.div}>
            <Text style={styles.subtitletext}>Acompanhamentos</Text>
            <Text style={styles.description}>Example - 1,0 kg</Text>
          </View>

          <View style={styles.div}>
            <Text style={styles.subtitletext}>Material de Consumo</Text>
            <Text style={styles.description}>Example - 1,0 kg</Text>
          </View>

          <View style={styles.div}>
            <Text style={styles.subtitletext}>Valor Total</Text>
            <Text style={styles.description}>Example: R$ 550,00</Text>
          </View>


        {/* **************************************************************************************** */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 25,
  },
  text: {
    fontSize: 14,
    fontWeight: '200',
    marginBottom: 40,
  },
  subtitletext:{
    fontSize: 20,
    marginLeft: 35,
    fontWeight: '900',
    color: '#A52A2A',
    marginTop: 20,
    marginBottom: 15,
  },
  div: {
    flex: 1,
    width: 300,
    height: 200,
    borderRadius: 15,
    borderColor: '#D2D1D1',
    borderWidth: 2,
    marginBottom: 30,
  },
  description: {
    marginLeft: 35,
    fontWeight: 'bold',
    marginTop: 5,
  }
});

>>>>>>> f33b683b43604b40e124fcd5ef9fd72f0318f40a
