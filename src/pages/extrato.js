import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExtratoScreen({ route }) {
  // Access the selected options from the navigation parameters
  const { selectedOptions } = route.params;
  const { selectedMeat } = selectedOptions; 

  // Calcular Carnes
  const calcularCustoCarnes = () => {
    // Calcule o custo com base na carne selecionada
    const custosCarne = {
      "Coxão Duro": 15,  // Substitua pelo custo real da carne de boi
      "Bisteca": 10,     // Substitua pelo custo real da carne de porco
      "Contra Filé": 8,  // Substitua pelo custo real da carne de frango
    };

    // Calcule o custo total com base na carne selecionada
    return custosCarne[selectedMeat] || 0; // Padrão para 0 se a carne não for encontrada
  };

  // Calcular Bebidas não Alcoolicas
  const calcularCustoBebidas = () => {
    const { aguaChecked, refrigeranteChecked, sucoChecked} = selectedOptions;
    let cost = 0;
    if (aguaChecked) cost += 2; // Replace with the actual cost of agua
    if (refrigeranteChecked) cost += 5; // Replace with the actual cost of refrigerante
    if (sucoChecked) cost += 4; // Replace with the actual cost of suco
    return cost;
  };

  // Calcular Bebidas Alcoolicas
  const calcularCustoBebidasAlcoolica = () => {
    const { alcoolicaChecked } = selectedOptions;
    let cost = 0;
    if (alcoolicaChecked) cost += 15; // Replace with the actual cost of alcoolica
    return cost;
  };

  // Calcular Acompanhamentos
  const calcularCustoAcompanhamentos = () => {
    const { arrozChecked, farofaChecked, paodealhoChecked } = selectedOptions;
    let cost = 0;
    if (arrozChecked) cost += 1; // Replace with the actual cost of arroz
    if (farofaChecked) cost += 1.5; // Replace with the actual cost of farofa
    if (paodealhoChecked) cost += 5; // Replace with the actual cost of paodealho
    return cost;
  };

  // Calcular Material de Consumo
  const calcularCustoMaterialConsumo = () => {
    const { copoChecked, guardanapoChecked, carvaoChecked, pratosChecked, talheresChecked, acendedoresChecked } = selectedOptions;
    let cost = 0;
    if (copoChecked) cost += 0.25; // Replace with the actual cost of copo
    if (guardanapoChecked) cost += 0.5; // Replace with the actual cost of guardanapo
    if (pratosChecked) cost += 0.25; // Replace with the actual cost of pratos
    if (talheresChecked) cost += 0.25; // Replace with the actual cost of talheres
    return cost;
  };


  // Calcular CUSTO TOTAL
  const { homens, mulheres, criancas,  copoChecked, guardanapoChecked, carvaoChecked, pratosChecked, talheresChecked, acendedoresChecked,  arrozChecked, farofaChecked, paodealhoChecked, alcoolicaChecked, aguaChecked, refrigeranteChecked, sucoChecked, coxaoDuroChecked, bistecaChecked, contraFileChecked } = selectedOptions;
  const totalCarnes = calcularCustoCarnes() * (homens + mulheres + criancas);
  const totalBebidasNAlcoolicas = calcularCustoBebidas() * (homens + mulheres + criancas);
  const totalBebidasAlcoolicas = calcularCustoBebidasAlcoolica() * (homens + mulheres);
  const totalAcompanhamentos = calcularCustoAcompanhamentos() * (homens + mulheres + criancas);
  let totalMaterialConsumo = calcularCustoMaterialConsumo() * (homens + mulheres + criancas);
  if (acendedoresChecked) {
    totalMaterialConsumo = totalMaterialConsumo + 0.5;
  };
  if (carvaoChecked){
    carvao = (((((homens + mulheres) * 600) + criancas * 300) / 1000) * 6);
    totalMaterialConsumo = totalMaterialConsumo + carvao;
  }
  
  const valorTotal = totalCarnes + totalBebidas + totalBebidasNAlcoolicas + totalAcompanhamentos + totalMaterialConsumo;
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
    pesoTotalCarvao = (((((homens + mulheres) * 600) + criancas * 300) / 1000) * 1.5) ;
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

  // Calcular PESAGEM ACENDEDOR
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

    // Calcular PESAGEM BEBIDA ALCOOLICA
    let alcoolicaText = null;
    if (alcoolicaChecked) {
      pesagemAlcoolicaPorPessoa = 3;
      pesoTotalAlcoolica = pesagemAlcoolicaPorPessoa * (homens + mulheres)
      alcoolicaText = (
        <Text style={styles.description}>Bebida Alcóolica - {pesoTotalAlcoolica} Latas</Text>
      );
    }

    // Calcular PESAGEM AGUA
    let aguaText = null;
    if (aguaChecked) {
      pesagemAguaPorPessoa = 0.5; //CALCULADO EM RELAÇÃO A GARRAFAS DE AGUA DE 500 ML
      pesoTotalAgua = pesagemAguaPorPessoa * (homens + mulheres + criancas)
      aguaText = (
        <Text style={styles.description}>Água - {pesoTotalAgua} L</Text>
      );
    }

    // Calcular PESAGEM REFRIGERANTE
    let refrigeranteText = null;
    if (refrigeranteChecked) {
      pesagemRefrigerantePorPessoa = 0.5;
      pesoTotalRefrigerante = pesagemRefrigerantePorPessoa * (homens + mulheres + criancas)
      refrigeranteText = (
        <Text style={styles.description}>Refrigerante - {pesoTotalRefrigerante} L</Text>
      );
    }

    // Calcular PESAGEM SUCO
    let sucoText = null;
    if (sucoChecked) {
      pesagemSucoPorPessoa = 0.2;
      pesoTotalSuco = pesagemSucoPorPessoa * (homens + mulheres + criancas)
      sucoText = (
        <Text style={styles.description}>Suco - {pesoTotalSuco} L</Text>
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
          
          {aguaChecked || refrigeranteChecked || alcoolicaChecked || sucoChecked ? (
            <View style={styles.div}>
              <Text style={styles.subtitletext}>Bebidas</Text>
              {aguaChecked && aguaText}
              {refrigeranteChecked && refrigeranteText}
              {alcoolicaChecked && alcoolicaText}
              {sucoChecked && sucoText}
            </View>
          ) : null}
          
          {arrozChecked || farofaChecked || paodealhoChecked ? (
            <View style={styles.div}>
              <Text style={styles.subtitletext}>Acompanhamentos</Text>
              {arrozChecked && arrozText}
              {farofaChecked && farofaText}
              {paodealhoChecked && paodealhoText}
            </View>
          ) : null}

          {copoChecked || guardanapoChecked || carvaoChecked || pratosChecked || talheresChecked || acendedoresChecked ? (
            <View style={styles.div}>
              <Text style={styles.subtitletext}>Material de Consumo</Text>
              {copoChecked && copoText}
              {guardanapoChecked && guardanapoText}
              {carvaoChecked && carvaoText}
              {pratosChecked && pratoText}
              {talheresChecked && talherText}
              {acendedoresChecked && acendedorText}
            </View>
          ) : null}

          <View style={styles.div}>
            <Text style={styles.subtitletext}>Valor Total</Text>
            <Text style={styles.description}>Carnes: R$ {totalCarnes.toFixed(2)}</Text>
            <Text style={styles.description}>Bebidas: R$ {totalBebidas.toFixed(2)}</Text>
            <Text style={styles.description}>Acompanhamentos: R$ {totalAcompanhamentos.toFixed(2)}</Text>
            <Text style={styles.description}>Material de Consumo: R$ {totalMaterialConsumo.toFixed(2)}</Text>
            <Text style={styles.description}>Valor Total: R$ {(totalCarnes + totalBebidas + totalBebidasNAlcoolicas + totalAcompanhamentos + totalMaterialConsumo).toFixed(2)}</Text>
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
