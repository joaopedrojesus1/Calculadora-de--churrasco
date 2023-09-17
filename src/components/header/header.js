// header.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Header({ route }) {
  return (
    <View style={styles.header}>
      <Text style={styles.screenName}>{route.name}</Text>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../images/logo.png')}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#8C3041', // Cor de churrasco
    paddingTop: 35,
  },
  screenName: {
    flex: 1.3, // Toma a maior parte do espaço à esquerda
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  logoContainer: {
    flex: 2,
    position: 'relative',
    justifyContent: 'center', // Centraliza a logo verticalmente
  },
  logo: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
  },
});
