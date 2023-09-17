import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Inicio({ navigation }) {
  useEffect(() => {
    // Simule o tempo de exibição da tela de splash (por exemplo, 3 segundos)
    setTimeout(() => {
      // Navegue para a tela principal do aplicativo após o tempo de splash
      navigation.replace('App');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Personalize a tela de splash conforme suas necessidades */}
      <Image source={'./img/logo.png'} style={styles.logo} />
      <Text>Seu Texto de Splash Aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9E7E2', // Cor de fundo da splash screen
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});
