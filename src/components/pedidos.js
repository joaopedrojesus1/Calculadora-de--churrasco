import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function PedidosScreen() {
  const [boiChecked, setBoiChecked] = useState(false);
  const [porcoChecked, setPorcoChecked] = useState(false);
  const [frangoChecked, setFrangoChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Como Funciona</Text>
      <Text style={styles.text}>
        Na "SteakTalk" você seleciona o que mais gosta da maneira mais simples possível,
        só selecionar a opção desejada. Pode testar você mesmo abaixo:
      </Text>
{/* *************************************************************************************** */}
      <Text style={styles.title}>Quantidade de Participantes</Text>
      <Text style={styles.grayText}>No máximo 50 pessoas</Text>
      <View style={styles.squareContainer}>
        <View style={[styles.square]}>
          <Icon name="female" size={60} color="#fff" />
          <Text style={styles.squareText}>Mulheres</Text>
        </View>
        <View style={[styles.square]}>
          <Icon name="male" size={60} color="#fff" />
          <Text style={styles.squareText}>Homens</Text>
        </View>
        <View style={[styles.square]}>
          <Icon name="child" size={60} color="#fff" />
          <Text style={styles.squareText}>Crianças</Text>
        </View>
      </View>
{/* ***************************************************************************************** */}
<Text style={styles.titlebaixo}>Opções de Carnes</Text>
      <View style={styles.meatOptions}>
        <TouchableOpacity
          style={[styles.meatOption, boiChecked && styles.checked]}
          onPress={() => setBoiChecked(!boiChecked)}
        >
          <Icon name="cutlery" size={60} color="#fff" />
          <Text style={styles.meatOptionText}>Boi</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.meatOption, porcoChecked && styles.checked]}
          onPress={() => setPorcoChecked(!porcoChecked)}
        >
          <Icon name="cutlery" size={60} color="#fff" />
          <Text style={styles.meatOptionText}>Porco</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.meatOption, frangoChecked && styles.checked]}
          onPress={() => setFrangoChecked(!frangoChecked)}
        >
          <Icon name="cutlery" size={60} color="#fff" />
          <Text style={styles.meatOptionText}>Frango</Text>
        </TouchableOpacity>
      </View>
{/* ***************************************************************************************** */}
      <Text style={styles.titlebaixo}>Opções de Bebidas</Text>
      <Text style={styles.grayText}>Quantas opções desejar</Text>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  titlebaixo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
  grayText: {
    fontSize: 14,
    color: 'gray',
    marginTop: -10,
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 4,
    borderRadius: 10,
  },
  squareText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
    textAlign: 'center',
  },
  meatOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  meatOption: {
    width: 100,
    height: 100,
    backgroundColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 4,
  },
  meatOptionText: {
    color: '#fff',
    fontSize: 16,
  },
  checked: {
    borderColor: '#FFD700',
    borderWidth: 2,
  },
});
