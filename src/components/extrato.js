import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';

export default function handleFinalizar() {
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handleFinalizar}>
        <Text>Pressione para dizer "Oi"</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
});
