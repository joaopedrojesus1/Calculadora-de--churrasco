import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExtratoScreen({ route }) {
  // Access the selected options from the navigation parameters
  const { selectedOptions } = route.params;

  // Calculate the cost for each category
  const calcularCustoCarnes = () => {
    const { boiChecked, porcoChecked, frangoChecked } = selectedOptions;
    let cost = 0;
    if (boiChecked) cost += 15; // Replace with the actual cost of boi
    if (porcoChecked) cost += 10; // Replace with the actual cost of porco
    if (frangoChecked) cost += 8; // Replace with the actual cost of frango
    return cost;
  };

  const calcularCustoBebidas = () => {
    const { aguaChecked, refrigeranteChecked, alcoolicaChecked, sucoChecked, criancas } = selectedOptions;
    let cost = 0;
    if (aguaChecked) cost += 2; // Replace with the actual cost of agua
    if (refrigeranteChecked) cost += 3; // Replace with the actual cost of refrigerante
    if (alcoolicaChecked) cost += 5; // Replace with the actual cost of alcoolica
    if (sucoChecked) cost += 4; // Replace with the actual cost of suco
    if (alcoolicaChecked && criancas > 0) {
      // Subtract the cost of alcoolica for children
      cost -= 5 * criancas;
    }
    return cost;
  };

  const calcularCustoAcompanhamentos = () => {
    const { arrozChecked, farofaChecked, paodealhoChecked } = selectedOptions;
    let cost = 0;
    if (arrozChecked) cost += 5; // Replace with the actual cost of arroz
    if (farofaChecked) cost += 4; // Replace with the actual cost of farofa
    if (paodealhoChecked) cost += 3; // Replace with the actual cost of paodealho
    return cost;
  };

  const calcularCustoMaterialConsumo = () => {
    const { copoChecked, guardanapoChecked, carvaoChecked, pratosChecked, talheresChecked, acendedoresChecked } = selectedOptions;
    let cost = 0;
    if (copoChecked) cost += 1; // Replace with the actual cost of copo
    if (guardanapoChecked) cost += 2; // Replace with the actual cost of guardanapo
    if (carvaoChecked) cost += 10; // Replace with the actual cost of carvao
    if (pratosChecked) cost += 2; // Replace with the actual cost of pratos
    if (talheresChecked) cost += 3; // Replace with the actual cost of talheres
    if (acendedoresChecked) cost += 5; // Replace with the actual cost of acendedores
    return cost;
  };

  // Calculate the total cost
  const { homens, mulheres, criancas } = selectedOptions;
  const totalCarnes = calcularCustoCarnes() * (homens + mulheres + criancas);
  const totalBebidas = calcularCustoBebidas() * (homens + mulheres);
  const totalAcompanhamentos = calcularCustoAcompanhamentos() * (homens + mulheres + criancas);
  const totalMaterialConsumo = calcularCustoMaterialConsumo() * (homens + mulheres + criancas);
  const valorTotal = totalCarnes + totalBebidas + totalAcompanhamentos + totalMaterialConsumo;

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
            <Text style={styles.description}>Carnes: R$ {totalCarnes.toFixed(2)}</Text>
            <Text style={styles.description}>Bebidas: R$ {totalBebidas.toFixed(2)}</Text>
            <Text style={styles.description}>Acompanhamentos: R$ {totalAcompanhamentos.toFixed(2)}</Text>
            <Text style={styles.description}>Material de Consumo: R$ {totalMaterialConsumo.toFixed(2)}</Text>
            <Text style={styles.description}>Valor Total: R$ {valorTotal.toFixed(2)}</Text>
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
