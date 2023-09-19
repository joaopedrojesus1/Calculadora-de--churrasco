// header.js
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function Header({ route }) {
  return (
    <View style={styles.header}>
      <Text style={styles.screenName}>{route.name}</Text>
      <Text style={styles.screenName2}>SteakTalk</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff', 
    paddingTop: 35,
    height: 100,
    borderBottomWidth: 2, 
    borderBottomColor: '#000', 
  },
  screenName: {
    flex: 0.94,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 10,
  },
  screenName2: {
    fontSize: 15,
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#000',
  },
  logoContainer: {
    flex: 2,
    position: 'relative',
    justifyContent: 'center', 
  },
  logo: {
    width: 80,
    height: 100,
    resizeMode: 'contain',
  },
});

