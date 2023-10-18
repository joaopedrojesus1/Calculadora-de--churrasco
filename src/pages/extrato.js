import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ExtratoScreen({ route }) {
  const { selectedOptions } = route.params;
  const { selectedMeat } = selectedOptions; 

  // Calcular Custo Bebidas não Alcoolicas
  const calcularCustoBebidas = () => {
    const { aguaChecked, refrigeranteChecked, sucoChecked} = selectedOptions;
    let cost = 0;
    if (aguaChecked) cost += 2; 
    if (refrigeranteChecked) cost += 5; 
    if (sucoChecked) cost += 4; 
    return cost;
  };

  // Calcular Custo Bebidas Alcoolicas
  const calcularCustoBebidasAlcoolica = () => {
    const { alcoolicaChecked } = selectedOptions;
    let cost = 0;
    if (alcoolicaChecked) cost += 15; 
    return cost;
  };

  // Calcular Custo Acompanhamentos
  const calcularCustoAcompanhamentos = () => {
    const { arrozChecked, farofaChecked, paodealhoChecked } = selectedOptions;
    let cost = 0;
    if (arrozChecked) cost += 1; 
    if (farofaChecked) cost += 1.5; 
    if (paodealhoChecked) cost += 5;
    return cost;
  };

  // Calcular Custo Material de Consumo
  const calcularCustoMaterialConsumo = () => {
    const { copoChecked, guardanapoChecked, carvaoChecked, pratosChecked, talheresChecked, acendedoresChecked } = selectedOptions;
    let cost = 0;
    if (copoChecked) cost += 0.25; 
    if (guardanapoChecked) cost += 0.5; 
    if (pratosChecked) cost += 0.25;
    if (talheresChecked) cost += 0.25; 
    return cost;
  };

  // Verificações
  const { homens, mulheres, criancas,  copoChecked, guardanapoChecked, carvaoChecked, pratosChecked, talheresChecked, acendedoresChecked,  arrozChecked, farofaChecked, paodealhoChecked, alcoolicaChecked, aguaChecked, refrigeranteChecked, sucoChecked, coxaoDuroChecked, bistecaChecked, contraFileChecked, picanhaChecked, linguiçaChecked, coxaChecked, coracaoChecked, asaChecked, porcoCoxaoDuroChecked } = selectedOptions;

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
      <Text style={styles.description}>Carvão - {pesoTotalCarvao.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
    );
  }

  // Calcular PESAGEM PRATOS
  let pratoText = null;
  if (pratosChecked) {
    pesagemPratoPorPessoa = 2;
    pesoTotalPrato = pesagemPratoPorPessoa * (homens + mulheres + criancas)
    pratoText = (
      <Text style={styles.description}>Pratos - {pesoTotalPrato} Unidades</Text>
    );
  }

  // Calcular PESAGEM TALHERES
  let talherText = null;
  if (talheresChecked) {
     pesagemTalherPorPessoa = 2;
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
      <Text style={styles.description}>Arroz - {pesoTotalArroz.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
    );
  }

    // Calcular PESAGEM FAROFA
    let farofaText = null;
    if (farofaChecked) {
      pesagemFarofaPorPessoa = 0.05;
      pesoTotalFarofa = pesagemFarofaPorPessoa * (homens + mulheres + criancas)
      farofaText = (
        <Text style={styles.description}>Farofa - {pesoTotalFarofa.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }
    
    // Calcular PESAGEM PÃO DE ALHO
    let paodealhoText = null;
    if (paodealhoChecked) {
      pesagemPaoDeAlhoPorPessoa = 2;
      pesoTotalPaoDeAlho = pesagemPaoDeAlhoPorPessoa * (homens + mulheres + criancas)
      paodealhoText = (
        <Text style={styles.description}>Pão de Alho - {pesoTotalPaoDeAlho.toLocaleString('pt-BR', {maximumFractionDigits: 2})} Unidades</Text>
      );
    }

    // Calcular PESAGEM BEBIDA ALCOOLICA
    let alcoolicaText = null;
    if (alcoolicaChecked) {
      pesagemAlcoolicaPorPessoa = 3;
      pesoTotalAlcoolica = pesagemAlcoolicaPorPessoa * (homens + mulheres)
      alcoolicaText = (
        <Text style={styles.description}>Bebida Alcóolica - {pesoTotalAlcoolica.toLocaleString('pt-BR', {maximumFractionDigits: 2})} Latas</Text>
      );
    }

    // Calcular PESAGEM AGUA
    let aguaText = null;
    if (aguaChecked) {
      pesagemAguaPorPessoa = 0.5; //CALCULADO EM RELAÇÃO A GARRAFAS DE AGUA DE 500 ML
      pesoTotalAgua = pesagemAguaPorPessoa * (homens + mulheres + criancas)
      aguaText = (
        <Text style={styles.description}>Água - {pesoTotalAgua.toLocaleString('pt-BR', {maximumFractionDigits: 2})} L</Text>
      );
    }

    // Calcular PESAGEM REFRIGERANTE
    let refrigeranteText = null;
    if (refrigeranteChecked) {
      pesagemRefrigerantePorPessoa = 0.5;
      pesoTotalRefrigerante = pesagemRefrigerantePorPessoa * (homens + mulheres + criancas)
      refrigeranteText = (
        <Text style={styles.description}>Refrigerante - {pesoTotalRefrigerante.toLocaleString('pt-BR', {maximumFractionDigits: 2})} L</Text>
      );
    }

    // Calcular PESAGEM SUCO
    let sucoText = null;
    if (sucoChecked) {
      pesagemSucoPorPessoa = 0.2;
      pesoTotalSuco = pesagemSucoPorPessoa * (homens + mulheres + criancas)
      sucoText = (
        <Text style={styles.description}>Suco - {pesoTotalSuco.toLocaleString('pt-BR', {maximumFractionDigits: 2})} L</Text>
      );
    }

    // Calcular PESAGEM Carnes Geral
    const options = {
      coxaoDuroChecked,
      bistecaChecked,
      contraFileChecked,
      picanhaChecked,
      linguiçaChecked,
      coxaChecked,
      coracaoChecked,
      asaChecked,
      porcoCoxaoDuroChecked,
    };
    
    const trueCount = Object.values(options).filter(option => option === true).length; // Saber quantas opções foram selecionadas

    if (homens > 0 || mulheres > 0) {
      let QuantidadePorAdulto = 600;
      QuantidadePorAdultoCarnes = QuantidadePorAdulto / trueCount;
    }
    else {
      QuantidadePorAdultoCarnes = 0;
    };

    if (criancas > 0) {
      let QuantidadePorCrianca = 300;
      QuantidadePorCriancaCarnes = QuantidadePorCrianca / trueCount;
    }
    else {
      QuantidadePorCriancaCarnes = 0;
    };
    
    // Calcular PESAGEM Coxão Duro
    let coxaoDuroText = null;
    if (coxaoDuroChecked) {
      pesoTotalCoxaoDuroPorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalCoxaoDuroPorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalCoxaoDuro = (pesoTotalCoxaoDuroPorAdulto + pesoTotalCoxaoDuroPorCrianca) / 1000
      coxaoDuroText = (
        <Text style={styles.description}>Coxão Duro (Bovina) - {totalCoxaoDuro.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }

    // Calcular PESAGEM Bisteca
    let bistecaText = null;
    if (bistecaChecked) {
      pesoTotalBistecaPorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalBistecaPorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalBisteca = (pesoTotalBistecaPorAdulto + pesoTotalBistecaPorCrianca) / 1000
      bistecaText = (
        <Text style={styles.description}>Bisteca - {totalBisteca.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }

    // Calcular PESAGEM Contra File
    let contraFileText = null;
    if (contraFileChecked) {
      pesoTotalContraFilePorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalContraFilePorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalContraFile = (pesoTotalContraFilePorAdulto + pesoTotalContraFilePorCrianca) / 1000
      contraFileText = (
        <Text style={styles.description}>Contra File - {totalContraFile.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }
    
    // Calcular PESAGEM Picanha
    let picanhaText = null;
    if (picanhaChecked) {
      pesoTotalPicanhaPorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalPicanhaPorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalPicanha = (pesoTotalPicanhaPorAdulto + pesoTotalPicanhaPorCrianca) / 1000
      picanhaText = (
        <Text style={styles.description}>Picanha - {totalPicanha.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }

    // Calcular PESAGEM Linguiça
    let linguiçaText = null;
    if (linguiçaChecked) {
      pesoTotalLinguiçaPorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalLinguiçaPorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalLinguiça = (pesoTotalLinguiçaPorAdulto + pesoTotalLinguiçaPorCrianca) / 1000
      linguiçaText = (
        <Text style={styles.description}>Linguiça - {totalLinguiça.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }

    // Calcular PESAGEM Coxa
    let coxaText = null;
    if (coxaChecked) {
      pesoTotalCoxaPorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalCoxaPorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalCoxa = (pesoTotalCoxaPorAdulto + pesoTotalCoxaPorCrianca) / 1000
      coxaText = (
        <Text style={styles.description}>Coxa - {totalCoxa.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }

    // Calcular PESAGEM Coração
    let coracaoText = null;
    if (coracaoChecked) {
      pesoTotalCoracaoPorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalCoracaoPorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalCoracao = (pesoTotalCoracaoPorAdulto + pesoTotalCoracaoPorCrianca) / 1000
      coracaoText = (
        <Text style={styles.description}>Coração - {totalCoracao.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }

    // Calcular PESAGEM Coxão Duro de Porco
    let porcoCoxaoDuroText = null;
    if (porcoCoxaoDuroChecked) {
      pesoTotalPorcoCoxaoDuroPorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalPorcoCoxaoDuroPorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalPorcoCoxaoDuro = (pesoTotalPorcoCoxaoDuroPorAdulto + pesoTotalPorcoCoxaoDuroPorCrianca) / 1000
      porcoCoxaoDuroText = (
        <Text style={styles.description}>Coxão Duro (Suina) - {totalPorcoCoxaoDuro.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }

    // Calcular PESAGEM Asa
    let asaText = null;
    if (asaChecked) {
      pesoTotalAsaPorAdulto = QuantidadePorAdultoCarnes * (homens + mulheres)
      pesoTotalAsaPorCrianca = QuantidadePorCriancaCarnes * (criancas)
      totalAsa = (pesoTotalAsaPorAdulto + pesoTotalAsaPorCrianca) / 1000
      asaText = (
        <Text style={styles.description}>Asa - {totalAsa.toLocaleString('pt-BR', {maximumFractionDigits: 2})} kg</Text>
      );
    }

    // Calcular Custo Carnes
    const calcularCustoCarnes = () => {
      const { coxaoDuroChecked, bistecaChecked, contraFileChecked, picanhaChecked, linguiçaChecked, coxaChecked, coracaoChecked, asaChecked, porcoCoxaoDuroChecked } = selectedOptions;
      let cost = 0;
      if (coxaoDuroChecked) cost += 30 * totalCoxaoDuro; 
      if (bistecaChecked) cost += 20 * totalBisteca; 
      if (contraFileChecked) cost += 40 * totalContraFile; 
      if (picanhaChecked) cost += 18 * totalPicanha; 
      if (linguiçaChecked) cost += 20 * totalLinguiça; 
      if (coxaChecked) cost += 9 * totalCoxa; 
      if (coracaoChecked) cost += 25 * totalCoracao; 
      if (asaChecked) cost += 19 * totalAsa;          
      if (porcoCoxaoDuroChecked) cost += 22 * totalPorcoCoxaoDuro; 
      return cost;
    };
   
    //Calcular custo total
    const totalCarnes = calcularCustoCarnes();
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



  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>#boraprochurras</Text>
        <Text style={styles.text}>
          Valores aproximados!
        </Text>
        {/* *************************************************************************************** */}
          {coxaoDuroChecked || bistecaChecked || contraFileChecked || picanhaChecked || linguiçaChecked || porcoCoxaoDuroChecked || coxaChecked || coracaoChecked || asaChecked ? (
            <View style={styles.div}>
              <Text style={styles.subtitletext}>Carnes</Text>
              {coxaoDuroChecked && coxaoDuroText}
              {bistecaChecked && bistecaText}
              {contraFileChecked && contraFileText}
              {picanhaChecked && picanhaText}
              {linguiçaChecked && linguiçaText}
              {porcoCoxaoDuroChecked && porcoCoxaoDuroText}
              {coxaChecked && coxaText}
              {coracaoChecked && coracaoText}
              {asaChecked && asaText}
            </View>
          ) : null}
          
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
            <Text style={styles.description}>Carnes: R$ {totalCarnes.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</Text>
            <Text style={styles.description}>Bebidas: R$ {totalBebidas.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</Text>
            <Text style={styles.description}>Acompanhamentos: R$ {totalAcompanhamentos.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</Text>
            <Text style={styles.description}>Material de Consumo: R$ {totalMaterialConsumo.toLocaleString('pt-BR', {maximumFractionDigits: 2})}</Text>
            <Text style={styles.description}>Valor Total: R$ {(totalCarnes + totalBebidasAlcoolicas + totalBebidasNAlcoolicas + totalAcompanhamentos + totalMaterialConsumo).toLocaleString('pt-BR', {maximumFractionDigits: 2})}</Text>
            <Text style={styles.description}>Valor por Pessoa: R$ {((totalCarnes + totalBebidasAlcoolicas + totalBebidasNAlcoolicas + totalAcompanhamentos + totalMaterialConsumo) / (homens + mulheres + criancas)).toLocaleString('pt-BR', {maximumFractionDigits: 2})}</Text>
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
    height: 300,
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
