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
      title: 'Bisteca de boi no forno',
      image: 'https://receitinhas.com.br/wp-content/uploads/2022/10/Bisteca-de-boi-no-forno-Tudo-Receitas-1200x774.jpg',
      preparationTime: '45 minutos',
      difficulty: 'Fácil',
      portion: '2',
      ingredients: [
        {
          section: '',
          items: [
            '',
            '2 bistecas bovinas',
            '1 cebola cortada em rodelas',
            '2 dentes de alho cortados em pedaços bem pequenos',
            'Pimenta-do-reino a gosto',
            '1 colher de sopa de sal grosso',
            '3 colheres de azeite',
            '',
          ],
        },
        
      ],
      instructions: [
        { 
          section: '',
          items: [
            '',
            '',
            '1. Em um recipiente coloque todos os ingredientes, menos as bistecas.',
            '',
            '2. Misture bem e reserve.',
            '',
            '3. Pré-aqueça o forno a 200 graus.',
            '',
            '4. Coloque as bistecas em uma assadeira.',
            '',
            '5. Espalhe o tempero sobre elas, de ambos os lados.',
            '',
            '6. Leve ao forno por cerca de 35 minutos (se necessário vire a carne na metade do tempo).',
            '',
            '7. Retire e sirva em seguida.',
            '',
            '',
          ],
        },
        
      ],
      category: 'Bovino',
    },

    {
      id: 2,
      title: 'Contra filé e batatas ao murro assado',
      image: 'https://www.sabornamesa.com.br/media/k2/items/cache/6111134b69b9dcb9c953bb227317f7fc_XL.jpg',
      preparationTime: '40 minutos',
      difficulty: 'Fácil',
      portion: '4',
      ingredients: [
        {
          section: 'Bife',
          items: [
            '',
            'Sal a gosto',
            'Azeite a gosto',
            '2 Dentes de Alho',
            '3 Bifes Altos de Contra Filé',
            '2 Colheres (de sopa) de Manteiga',
            '1 Ramo de Alecrim',
            '',
          ],
        },
        {
          section: 'Batata',
          items: [
            '',
            '700g batata bolinha',
            'Salsinha',
            'Azeite',
            '2 dentes de alho',
            'Manjericão',
            'Alecrim',
            'Tomilho',
            '',
          ],
        },
      ],
      instructions: [
        { 
          section: 'Batata',
          items: [
            '',
            '1. Em uma panela com água e sal cozinhe as suas batatas até elas ficarem molinhas, retire.',
            '',
            '2. Em uma frigideira, coloque um fio de azeite, espalhe bem e então comece a esmagar as suas batatas, com casca e tudo.',
            '',
            '3. Repita o processo com todas as batatas, disponha na frigideira e só então leve ao fogo baixo, tempere com sal e pimenta.',
            '',
            '4. Corte o tomilho, alecrim, alho e salsinha e reserve.',
            '',
            '5. Quando as suas batatas estiverem bem douradas, vire e deixe assar por 10 minutos.',
            '',
            '6. Quando ambos os lados estiverem com crosta, afaste tudo e adicione a manteiga o alho, alecrim e tomilho, refogue até dourar.',
            '',
            '7. Retire do fogão e misture todos os componentes. Finalize com manjericão e salsinha.',
            '',
          ],
        },
        { 
          section: 'Contra Filé',
          items: [
            '',
            '1. Em uma frigideira bem quente adicione azeite e logo em seguida, acrescente os filés e deixe fritar até criar uma crosta dourada, vire em seguida.',
            '',
            '2. Repita o processo no outro lado do bife.',
            '',
            '3. Agora, adicione manteiga, dentes de alho amassado e alecrim fresco, mexa até a manteiga derreta.',
            '',
            '4. Logo depois regue o bife com manteiga até que fritem totalmente.',
            '',
            '5. Para finalizar, sele a gordura e então retire do fogo. Deixe descansar por 3 minutinhos.',
            '',
            '6. Sirva logo depois junto as batatas.',
            '',
            '',
            
          ],
        },
      ],
      category: 'Bovino',
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
