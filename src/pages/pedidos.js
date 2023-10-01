import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import ExtratoScreen from '../components/extrato';
import NumericInput from 'react-native-numeric-input';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function PedidosScreen({navigation}) {
  const [boiChecked, setBoiChecked] = useState(false);
  const [porcoChecked, setPorcoChecked] = useState(false);
  const [frangoChecked, setFrangoChecked] = useState(false);
  const [aguaChecked, setAguaChecked] = useState(false);
  const [refrigeranteChecked, setRefrigeranteChecked] = useState(false);
  const [alcoolicaChecked, setAlcoolicaChecked] = useState(false);
  const [sucoChecked, setSucoChecked] = useState(false);
  const [arrozChecked, setArrozChecked] = useState(true);
  const [farofaChecked, setFarofaChecked] = useState(true);
  const [paodealhoChecked, setPaoDeAlhoChecked] = useState(true);
  const [copoChecked, setCopoChecked] = useState(false);
  const [guardanapoChecked, setGuardanapoChecked] = useState(false);
  const [carvaoChecked, setCarvaoChecked] = useState(false);
  const [pratosChecked, setPratosChecked] = useState(false);
  const [talheresChecked, setTalheresChecked] = useState(false);
  const [acendedoresChecked, setAcendedoresChecked] = useState(false);
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);
  const [criancas, setCriancas] = useState(0);
  const [totalParticipants, setTotalParticipants] = useState(0);
  const [carneTipoVisible, setCarneTipoVisible] = useState(false);
  




  

  const handleHomensChange = (value) => {
    if (value + mulheres + criancas <= 50) {
      setHomens(value);
      setTotalParticipants(value + mulheres + criancas);
    }
  };

  const handleMulheresChange = (value) => {
    if (homens + value + criancas <= 50) {
      setMulheres(value);
      setTotalParticipants(homens + value + criancas);
    }
  };

  const handleCriancasChange = (value) => {
    if (homens + mulheres + value <= 50) {
      setCriancas(value);
      setTotalParticipants(homens + mulheres + value);
    }
  };
  const toggleCarneOptions = () => {
    setCarneTipoVisible(!carneTipoVisible);
  };
  
  const handleFinalizarPress = () => {
    // Você pode adicionar qualquer lógica adicional aqui, se necessário
    navigation.navigate('Extrato');
  };
  
  

  

  

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Como Funciona</Text>
        <Text style={styles.text}>
          Na "SteakTalk" você calcula e escolhe o que mais gosta da maneira mais simples possível,
          só selecionar a opção desejada. Pode testar você mesmo abaixo:
        </Text>
        {/* *************************************************************************************** */}
        <Text style={styles.title}>Quantidade de Participantes</Text>
        <Text style={styles.grayText}>No máximo 50 pessoas</Text>
        <View style={styles.squareContainer}>
          {/* NumericInput for Homens */}
          <View style={styles.squarecomNumeric}>
            <View style={styles.square}>
              <Icon name="male" size={60} color="#fff" />
              <Text style={styles.squareText}>Homens</Text>
            </View>
            <NumericInput
              value={homens}
              onChange={handleHomensChange}
              minValue={0}
              maxValue={50 - mulheres - criancas}
              totalWidth={120}
              totalHeight={40}
              iconSize={25}
              step={1}
              valueType="integer"
              rounded
              textColor="#fff"
              iconStyle={{ color: 'black' }}
              inputStyle={{ color: 'black' }}
            />
          </View>
          

          {/* NumericInput for Mulheres */}
          <View style={styles.squarecomNumeric}>
            <View style={[styles.square]}>
              <Icon name="female" size={60} color="#fff" />
              <Text style={styles.squareText}>Mulheres</Text>
            </View>
            <NumericInput
                value={mulheres}
                onChange={handleMulheresChange}
                minValue={0}
                maxValue={50 - homens - criancas}
                totalWidth={120}
                totalHeight={40}
                iconSize={25}
                step={1}
                valueType="integer"
                rounded
                textColor="#fff"
                iconStyle={{ color: 'black' }}
                inputStyle={{ color: 'black' }}
            />
          </View>

          {/* NumericInput for Crianças */}
          <View style={styles.squarecomNumeric}>
            <View style={[styles.square]}>
              <Icon name="child" size={60} color="#fff" />
              <Text style={styles.squareText}>Crianças</Text>
            </View>
            <NumericInput
              value={criancas}
              onChange={handleCriancasChange}
              minValue={0}
              maxValue={50 - homens - mulheres}
              totalWidth={120}
              totalHeight={40}
              iconSize={25}
              step={1}
              valueType="integer"
              rounded
              textColor="#fff"
              iconStyle={{ color: 'black' }}
              inputStyle={{ color: 'black' }}
              />
          </View>
        </View>
        {/* ***************************************************************************************** */}
        <Text style={styles.titlebaixo}>Opções de Carnes</Text>
        <Text style={styles.grayText}>Quantas opções desejar</Text>
        <View style={styles.meatOptions}>


        {/*----------- Bovinatipo -----------*/}
        <TouchableOpacity
          style={[styles.meatOption, carneTipoVisible && styles.checked]}
          onPress={toggleCarneOptions}
        >
          <MaterialCommunityIcon name="cow" size={60} color="#fff" />
          <Text style={styles.meatOptionText}>Boi</Text>
        </TouchableOpacity>


          {carneTipoVisible && (
           <View>
           {/* Opções de carne */}
           <TouchableOpacity
             style={styles.meatOption}
             onPress={() => {
               // Lógica para tratar a seleção de Coxão Duro aqui
             }}
           >
             <MaterialCommunityIcon name="food-steak" size={60} color="#fff" />
             <Text style={styles.meatOptionText}>Coxão Duro</Text>
           </TouchableOpacity>
     
           <TouchableOpacity
             style={styles.meatOption}
             onPress={() => {
               // Lógica para tratar a seleção de Bisteca aqui
             }}
           >
             <MaterialCommunityIcon name="food-drumstick" size={60} color="#fff" />
             <Text style={styles.meatOptionText}>Bisteca</Text>
           </TouchableOpacity>
     
           <TouchableOpacity
             style={styles.meatOption}
             onPress={() => {
               // Lógica para tratar a seleção de Contra Filé aqui
             }}
           >
             <MaterialCommunityIcon name="food-fork-drink" size={60} color="#fff" />
             <Text style={styles.meatOptionText}>Contra Filé</Text>
           </TouchableOpacity>
           {/* Outras opções de carne podem ser adicionadas aqui */}
         </View>
       )}


          {/* ----------------porcotipo ----------------*/}
          <TouchableOpacity
            style={[styles.meatOption, porcoChecked && styles.checked]}
            onPress={() => {
              setPorcoChecked(!porcoChecked);           
            }}
          >
            <MaterialCommunityIcon name="pig" size={60} color="#fff" />
            <Text style={styles.meatOptionText}>Porco</Text>
          </TouchableOpacity>
  

          {/* ----------------Frangotipo ----------------*/}
          <TouchableOpacity
            style={[styles.meatOption, frangoChecked && styles.checked]}
            onPress={() => {
              setFrangoChecked(!frangoChecked);           
            }}
          >
            <MaterialCommunityIcon name="food-drumstick" size={60} color="#fff" />
            <Text style={styles.meatOptionText}>Frango</Text>
          </TouchableOpacity>
        </View>
        {/* ***************************************************************************************** */}
        <Text style={styles.titlebaixo}>Opções de Bebidas</Text>
        <Text style={styles.grayText}>Quantas opções desejar</Text>
        <View style={styles.drinkOptions}>
          {/* Primeira Linha */}
          <View style={styles.drinkOptionContainer}>
            <TouchableOpacity
              style={[styles.drinkOption, aguaChecked && styles.checked]}
              onPress={() => setAguaChecked(!aguaChecked)}
            >
              <MaterialCommunityIcons name="cup-water" size={60} color="#fff" />
              <Text style={styles.drinkOptionText}>Água</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.drinkOption, refrigeranteChecked && styles.checked]}
              onPress={() => setRefrigeranteChecked(!refrigeranteChecked)} 
            >
              <MaterialCommunityIcons name="bottle-soda-classic" size={60} color="#fff" />
              <Text style={styles.drinkOptionText}>Refrigerante</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.drinkOption, alcoolicaChecked && styles.checked]}
              onPress={() => setAlcoolicaChecked(!alcoolicaChecked)}
            >
              <FontAwesome5 name="wine-bottle" size={60} color="#fff" />
              <Text style={styles.drinkOptionLargeText}>Bebida Alcoólica</Text>
            </TouchableOpacity>
          </View>
          {/* Segunda Linha */}
          <View style={styles.drinkOptionContainer}>
            <TouchableOpacity
              style={[styles.drinkOption, sucoChecked && styles.checked]}
              onPress={() => setSucoChecked(!sucoChecked)}
            >
              <FontAwesome5 name="glass-whiskey" size={60} color="#fff" />
              <Text style={styles.drinkOptionText}>Suco</Text>
            </TouchableOpacity>
          </View>
        </View>


        {/* **************************************************************************************** */}
        <Text style={styles.titlebaixo}>Acompanhamentos</Text>
        <Text style={styles.grayText}>Obrigatórios!</Text>
        <View style={styles.acompanhamentosOptions}>
          <TouchableOpacity
            style={[styles.acompOption, arrozChecked && styles.checked]}
            onPress={() => setArrozChecked(!arrozChecked)}
          >
            <MaterialCommunityIcons name="rice" size={60} color="#fff" />
            <Text style={styles.acompOptionText}>Arroz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.acompOption, farofaChecked && styles.checked]}
            onPress={() => setFarofaChecked(!farofaChecked)} 
          >
            <Icon name="cutlery" size={60} color="#fff" />
            <Text style={styles.acompOptionText}>Farofa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.acompOption, paodealhoChecked && styles.checked]}
            onPress={() => setPaoDeAlhoChecked(!paodealhoChecked)}
          >
            <FontAwesome5 name="bread-slice" size={60} color="#fff" />
            <Text style={styles.acompOptionText}>Pão de Alho</Text>
          </TouchableOpacity>
        </View>

        {/* **************************************************************************************** */}
        <Text style={styles.titlebaixo}>Material de Consumo</Text>
        <Text style={styles.grayText}>Quantas opções desejar</Text>
        <View style={styles.drinkOptions}>
          {/* Primeira Linha */}
          <View style={styles.materialOptions}>
            <TouchableOpacity
              style={[styles.materialOption, copoChecked && styles.checked]}
              onPress={() => setCopoChecked(!copoChecked)}
            >
              <MaterialCommunityIcons name="cup" size={60} color="#fff" />
              <Text style={styles.materialOptionText}>Copo Plástico</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.materialOption, guardanapoChecked && styles.checked]}
              onPress={() => setGuardanapoChecked(!guardanapoChecked)} 
            >
              <MaterialCommunityIcons name="paper-roll" size={60} color="#fff" />
              <Text style={styles.materialOptionText}>Guardanapo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.materialOption, carvaoChecked && styles.checked]}
              onPress={() => setCarvaoChecked(!carvaoChecked)}
            >
              <MaterialCommunityIcons name="grill" size={60} color="#fff" />
              <Text style={styles.materialOptionText}>Carvão</Text>
            </TouchableOpacity>
          </View>
          {/* Segunda Linha */}
          <View style={styles.materialOptionContainer}>
            <TouchableOpacity
                style={[styles.materialOption, pratosChecked && styles.checked]}
                onPress={() => setPratosChecked(!pratosChecked)}
              >
                <MaterialCommunityIcons name="circle-slice-8" size={60} color="#fff" />
                <Text style={styles.materialOptionText}>Pratos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.materialOption, talheresChecked && styles.checked]}
                onPress={() => setTalheresChecked(!talheresChecked)} 
              >
                <MaterialCommunityIcons name="silverware-fork-knife" size={60} color="#fff" />
                <Text style={styles.materialOptionText}>Talheres</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.materialOption, acendedoresChecked && styles.checked]}
                onPress={() => setAcendedoresChecked(!acendedoresChecked)}
              >
                <MaterialCommunityIcons name="fire" size={60} color="#fff" />
                <Text style={styles.materialOptionText}>Acendedores</Text>
              </TouchableOpacity>
          </View>
        </View>


        <TouchableOpacity
        style={styles.button}
        onPress={() => handleFinalizarPress()}
      >
        <Text style={styles.buttonText}>Finalizar</Text>
      </TouchableOpacity>




        {/* **************************************************************************************** */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
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
    fontSize: 20,
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
    elevation: 1,
    width: 120,
    height: 120,
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
  squarecomNumeric: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  meatOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  meatOption: {
    elevation: 3,
    width: 120,
    height: 120,
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
    borderWidth: 5,
  },
  drinkOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  drinkOption: {
    elevation: 3,
    width: 120,
    height: 120,
    backgroundColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 4,
  },
  drinkOptionText: {
    color: '#fff',
    fontSize: 16,
  },
  drinkOptionLargeText: {
    color: '#fff',
    fontSize: 12,
  },
  acompanhamentosOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  acompOption: {
    elevation: 3,
    width: 120,
    height: 120,
    backgroundColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 4,
  },
  acompOptionText: {
    color: '#fff',
    fontSize: 16,
  },
  acompanhamentosOptionLargeText: {
    color: '#fff',
    fontSize: 12,
  },
  materialOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  materialOption: {
    elevation: 3,
    width: 120,
    height: 120,
    backgroundColor: '#A52A2A',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10,
    marginRight: 4,
  },
  materialOptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  materialOptionText: {
    color: '#fff',
    fontSize: 16,
  },
  materialOptionLargeText: {
    color: '#fff',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#A52A2A',
    borderRadius: 10,
    width: 200,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

