import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExtratoScreen({ route }) {
  // Access the selected options from the navigation parameters
  const { selectedOptions } = route.params;

  // Calcular Carnes
  const calcularCustoCarnes = () => {
    const { boiChecked, porcoChecked, frangoChecked } = selectedOptions;
    let cost = 0;
    if (boiChecked) cost += 15; // Replace with the actual cost of boi
    if (porcoChecked) cost += 10; // Replace with the actual cost of porco
    if (frangoChecked) cost += 8; // Replace with the actual cost of frango
    return cost;
  };

  // Calcular Bebidas não Alcoolicas
  const calcularCustoBebidas = () => {
    const { aguaChecked, refrigeranteChecked, sucoChecked} = selectedOptions;
    let cost = 0;
    if (aguaChecked) cost += 2; // Replace with the actual cost of agua
    if (refrigeranteChecked) cost += 3; // Replace with the actual cost of refrigerante
    if (sucoChecked) cost += 4; // Replace with the actual cost of suco
    return cost;
  };

  // Calcular Bebidas Alcoolicas
  const calcularCustoBebidasAlcoolica = () => {
    const { alcoolicaChecked } = selectedOptions;
    let cost = 0;
    if (alcoolicaChecked) cost += 5; // Replace with the actual cost of alcoolica
    return cost;
  };

  // Calcular Acompanhamentos
  const calcularCustoAcompanhamentos = () => {
    const { arrozChecked, farofaChecked, paodealhoChecked } = selectedOptions;
    let cost = 0;
    if (arrozChecked) cost += 5; // Replace with the actual cost of arroz
    if (farofaChecked) cost += 4; // Replace with the actual cost of farofa
    if (paodealhoChecked) cost += 3; // Replace with the actual cost of paodealho
    return cost;
  };

  // Calcular Material de Consumo
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

  // Calcular CUSTO TOTAL
  const { homens, mulheres, criancas,  copoChecked, guardanapoChecked, carvaoChecked, pratosChecked, talheresChecked, acendedoresChecked,  arrozChecked, farofaChecked, paodealhoChecked, alcoolicaChecked, aguaChecked, refrigeranteChecked, sucoChecked } = selectedOptions;
  const totalCarnes = calcularCustoCarnes() * (homens + mulheres + criancas);
  const totalBebidasNAlcoolicas = calcularCustoBebidas() * (homens + mulheres + criancas);
  const totalBebidasAlcoolicas = calcularCustoBebidasAlcoolica() * (homens + mulheres);
  const totalAcompanhamentos = calcularCustoAcompanhamentos() * (homens + mulheres + criancas);
  const totalMaterialConsumo = calcularCustoMaterialConsumo() * (homens + mulheres + criancas);
  const valorTotal = totalCarnes + totalBebidas + totalAcompanhamentos + totalMaterialConsumo;
  const totalBebidas = totalBebidasNAlcoolicas + totalBebidasAlcoolicas;

  // Calcular PESAGEM COPOS
  let copoText = null;
  if (copoChecked) {
    pesagemCopoPorPessoa = 2;
    pesoTotalCopo = pesagemCopoPorPessoa * (homens + mulheres + criancas)
    copoText = (
      <Text style={styles.description}>Copos - {pesoTotalCopo} Unidades</Text>
    );
  }

  // Calcular PESAGEM GUARDANAPOS
  let guardanapoText = null;
  if (guardanapoChecked) {
    pesagemGuardanapoPorPessoa = 2;
    pesoTotalGuardanapo = pesagemGuardanapoPorPessoa * (homens + mulheres + criancas)
    guardanapoText = (
      <Text style={styles.description}>Guardanapos - {pesoTotalGuardanapo} Unidades</Text>
    );
  }

  // Calcular PESAGEM CARVÃO
  let carvaoText = null;
  if (carvaoChecked) {
    pesagemCarvaoPorPessoa = 0.3;
    pesoTotalCarvao = pesagemCarvaoPorPessoa * (homens + mulheres + criancas)
    carvaoText = (
      <Text style={styles.description}>Carvão - {pesoTotalCarvao.toFixed(1)} kg</Text>
    );
  }

  // Calcular PESAGEM PRATOS
  let pratoText = null;
  if (pratosChecked) {
    pesagemPratoPorPessoa = 1;
    pesoTotalPrato = pesagemPratoPorPessoa * (homens + mulheres + criancas)
    pratoText = (
      <Text style={styles.description}>Pratos - {pesoTotalPrato} Unidades</Text>
    );
  }

  // Calcular PESAGEM TALHERES
  let talherText = null;
  if (talheresChecked) {
     pesagemTalherPorPessoa = 1;
    pesoTotalTalher = pesagemTalherPorPessoa * (homens + mulheres + criancas)
    talherText = (
      <Text style={styles.description}>Talheres - {pesoTotalTalher} Unidades</Text>
    );
   }

  // Calcular PESAGEM TALHERES
  let acendedorText = null;
  if (acendedoresChecked) {
    pesagemAcendedorPorPessoa = 1;
    pesoTotalAcendedor = pesagemAcendedorPorPessoa
    acendedorText = (
      <Text style={styles.description}>Acendedores - {pesoTotalAcendedor} Caixa</Text>
    );
  }

  // Calcular PESAGEM ARROZ
  let arrozText = null;
  if (arrozChecked) {
    pesagemArrozPorPessoa = 0.2;
    pesoTotalArroz = pesagemArrozPorPessoa * (homens + mulheres + criancas)
    arrozText = (
      <Text style={styles.description}>Arroz - {pesoTotalArroz.toFixed(1)} kg</Text>
    );
  }

    // Calcular PESAGEM FAROFA
    let farofaText = null;
    if (farofaChecked) {
      pesagemFarofaPorPessoa = 0.05;
      pesoTotalFarofa = pesagemFarofaPorPessoa * (homens + mulheres + criancas)
      farofaText = (
        <Text style={styles.description}>Farofa - {pesoTotalFarofa.toFixed(2)} kg</Text>
      );
    }
    
    // Calcular PESAGEM PÃO DE ALHO
    let paodealhoText = null;
    if (paodealhoChecked) {
      pesagemPaoDeAlhoPorPessoa = 2;
      pesoTotalPaoDeAlho = pesagemPaoDeAlhoPorPessoa * (homens + mulheres + criancas)
      paodealhoText = (
        <Text style={styles.description}>Pão de Alho - {pesoTotalPaoDeAlho} Unidades</Text>
      );
    }
    
   



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
            {arrozText}
            {farofaText}
            {paodealhoText}
          </View>

          <View style={styles.div}>
            <Text style={styles.subtitletext}>Material de Consumo</Text>
            {copoText}
            {guardanapoText}
            {carvaoText}
            {pratoText}
            {talherText}
            {acendedorText}
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
    height: 250,
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
