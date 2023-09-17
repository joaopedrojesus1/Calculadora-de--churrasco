import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PedidosScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>faça um pedido</Text>
      {/* Adicione  aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
