import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import RecipeListPage from '../components/receitas/RecipeListPage';
import RecipeDetailPage from '../components/receitas/RecipeDetailPage';

const ModalContainer = ({ children }) => {
  return (
    <View style={styles.modalContainer}>
      <View style={styles.modalContent}>{children}</View>
    </View>
  );
};

const Receitas = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      title: 'Bolo de Chocolate',
      image: 'https://cdn.sodiedoces.com.br/wp-content/uploads/2021/11/25112521/Chocolate-e1637586413171.png',
      preparationTime: '40 minutos',
      difficulty: 'Médio',
      portion: '10',
      ingredients: [
        {
          section: 'Massa',
          items: [
            '4 ovos',
            '2 colheres (sopa) de manteiga',
            '2 xícaras (chá) de açúcar',
            '1 xícara (chá) de leite',
            '4 colheres (sopa) de chocolate em pó',
            '3 xícaras (chá) de farinha de trigo',
            '2 colheres (sopa) de fermento',
          ],
        },
        {
          section: 'Calda',
          items: [
            '2 colheres (sopa) de manteiga',
            '2 latas de creme de leite com soro',
            '7 colheres (sopa) de chocolate em pó',
            '3 colheres (sopa) de açúcar',
          ],
        },
      ],
      instructions: [
        { 
          section: 'Massa',
          items: [
            '1. Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.',
            '',
            '2. Adicione o fermento e misture com uma espátula delicadamente.',
            '',
            '3. Em uma forma untada, despeje a massa e asse em forno médio (180 ºC) preaquecido por cerca de 40 minutos. Não se esqueça de usar uma forma alta para essa receita: como leva duas colheres de fermento, ela cresce bastante! Outra solução pode ser colocar apenas uma colher de fermento e manter a sua receita em uma forma pequena.',
            '',
            '4. Acrescente o creme de leite e misture bem até obter uma consistência cremosa.',
          ],
        },
        { 
          section: 'Calda',
          items: [
            '1. Em uma panela, aqueça a manteiga e misture o chocolate em pó até que esteja homogêneo.',
            '',
            '2. Desligue o fogo e acrescente o açúcar.',
          ],
        }
      ],
      category: 'Sobremesa',
    },

    {
      id: 2,
      title: 'Brigadeiro',
      image: 'https://catia-brigadeiro.com/img/brigadeiro_alpha.png',
      preparationTime: '25 minutos',
      difficulty: 'Muito fácil',
      portion: '30',
      ingredients: [
        {
          section: 'Brigadeiro',
          items: [
            '1 caixa de leite condensado',
            '7 colheres (sopa) de achocolatado ou 4 colheres (sopa) de chocolate em pó',
            '1 colher (sopa) de margarina sem sal',
            'chocolate granulado',
          ],
        },
      ],
      instructions: [
        { 
          section: '',
          items: [
            '1. Em uma panela funda, acrescente o leite condensado, a margarina e o chocolate em pó.',
            '',
            '2. Cozinhe em fogo médio e mexa até que o brigadeiro comece a desgrudar da panela.',
            '',
            '3. Deixe esfriar e faça pequenas bolas com a mão passando a massa no chocolate granulado.',
          ],
        }
      ],
      category: 'Sobremesa',
    },
    
    {
      id: 3,
      title: 'Pavê de Bis com morango',
      image: 'https://o.remove.bg/downloads/15a98775-f744-4ded-9d40-a7d5d0e183c1/pave_de_bis_com_morango_3429_orig-removebg-preview.png',
      preparationTime: '2 horas',
      difficulty: 'Médio',
      ingredients: [
        {
          section: 'Creme',
          items: [
            '6 gemas peneiradas',
            '2 latas de leite condensado',
            '4 medidas da lata de leite (use a lata de leite condensado para medir)',
            '2 caixinhas de creme de leite',
            '4 colheres de sopa de amido de milho',
            '1 colher de sopa de essência de baunilha',
            '1 cálice de rum (opcional)',
          ],
        },
        {
          section: 'Chantilly',
          items: [
            '500ml de creme de leite fresco',
            '4 colheres de sopa de açúcar',
          ],
        },
        {
          section: 'Montagem',
          items: [
            '2 caixas de Bis branco picado',
            '500g de morangos fatiados',
          ],
        },
      ],
      instructions: [
        {
          section: 'Creme',
          items: [
            '1. Em uma panela, misture as gemas, o leite condensado, o leite e o amido de milho.',
            '',
            '2. Leve ao fogo médio, mexendo sem parar até começar a engrossar.',
            '',
            '3. Acrescente a essência de baunilha e o rum e misture por mais alguns minutos.',
            '',
            '4. Por último, adicione o creme de leite, misture bem e desligue o fogo.',
            '',
            '5. Reserve até esfriar.',
          ],
        },
        {
          section: 'Chantilly',
          items: [
            '1. Na batedeira, misture o creme de leite fresco e o açúcar.',
            '',
            '2. Bata até obter o ponto de chantilly e reserve na geladeira.',
          ],
        },
        {
          section: 'Montagem',
          items: [
            '1. Em uma travessa, faça uma camada fina de creme.',
            '',
            '2. Por cima, coloque todo o Bis picado e cubra com uma camada generosa de creme.',
            '',
            '3. Adicione os morangos fatiados e coloque a última camada de creme.',
            '',
            '4. Para finalizar, cubra com o chantilly batido e decore com morangos.',
            '',
            '5. Leve à geladeira por, no mínimo, 2 horas antes de servir.',
          ],
        },
      ],
      category: 'Sobremesa',
    },
  ];

  const handlePressRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleCloseModal = () => {
    setSelectedRecipe(null);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {selectedRecipe ? (
          <ModalContainer>
            <RecipeDetailPage recipe={selectedRecipe} onClose={handleCloseModal} />
          </ModalContainer>
        ) : (
          <RecipeListPage recipes={recipes} onPressRecipe={handlePressRecipe} />
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#ffffff',
    width: '80%',
    padding: 20,
    borderRadius: 8,
    
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  recipeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    
  },
  
  recipeImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  recipeTitle: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Receitas;
