import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Você pode escolher um conjunto de ícones que desejar

export default function PedidosScreen() {
  return (
    <View style={styles.container}>
      {/* Título "Como Funciona" */}
      <Text style={styles.title}>Como Funciona</Text>

      {/* Texto explicativo */}
      <Text style={styles.text}>
        Na "SteakTalk" você seleciona o que mais gosta da maneira mais simples possível,
        só selecionar a opção desejada. Pode testar você mesmo abaixo:
      </Text>

{/*************************************************************************************************************/}
      {/* Título "Quantidade de Participantes" */}
      <Text style={styles.title}>Quantidade de Participantes</Text>

      {/* Texto com a quantidade máxima de pessoas */}
      <Text style={styles.grayText}>No máximo 50 pessoas</Text>
      {/* Quadrados com ícones */}
      <View style={styles.squareContainer}>
        {/* Quadrado "Mulheres" */}
        <View style={styles.square}>
          <Icon name="female" size={60} color="#fff" />
          <Text style={styles.squareText}>Mulheres</Text>
        </View>

        {/* Quadrado "Homens" */}
        <View style={styles.square}>
          <Icon name="male" size={60} color="#fff" />
          <Text style={styles.squareText}>Homens</Text>
        </View>

        {/* Quadrado "Crianças" */}
        <View style={styles.square}>
          <Icon name="child" size={60} color="#fff" />
          <Text style={styles.squareText}>Crianças</Text>
        </View>
      </View>

{/**************************************************************************************************************/}
      {/* Título "Quantidade de Carnes" */}
      <Text style={styles.titlebaixo}>Opções de Carnes</Text>

      {/* Texto informativo */}
      <Text style={styles.grayText}>Quantas opções desejar</Text>


{/**************************************************************************************************************/}
      {/* Título "Quantidade de Bebidas" */}
      <Text style={styles.titlebaixo}>Opções de Bebidas</Text>

      {/* Texto informativo */}
      <Text style={styles.grayText}>Quantas opções desejar</Text>

{/**************************************************************************************************************/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16
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
});
