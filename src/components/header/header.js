// header.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


export default function Header({ route }) {
  return (
    <View style={styles.header}>
      <Text style={styles.screenName}>{route.name}</Text>
      <Image source= {require('../../../images/logo2.png')} style={styles.logo}/>
      <Text style={styles.screenName2}>SteakTalk</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A52A2A', 
    paddingTop: 35,
    height: 100,
    borderBottomWidth: 3, 
    borderBottomColor: '#fff', 
  },
  screenName: {
    flex: 0.94,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  screenName2: {
    fontSize: 15,
    
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 55,
    resizeMode: 'contain',
    marginRight: 91,
  },
});

