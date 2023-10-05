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
          items: [
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
      title: 'Coxão duro com varições',
      image: 'https://www.sabornamesa.com.br/media/k2/items/cache/09b87d8495c8cf32b64735c816312dfe_XL.jpg',
      preparationTime: '40 minutos',
      difficulty: 'Fácil',
      ingredients: [
        {
          section: '',
          items: [
            '500 gramas de coxão duro.',
            '½ limão.',
            '1 colher de sobremesa rasa de açúcar.',
            'Pimenta do reino a gosto.',
            'Sal a gosto.',
            '2 colheres de sopa de vinagre.',
            '½ cebola média picada.',
            '1 dente de alho espremido.',
          ],
        },
        
      ],
      instructions: [
        {
          items: [
            '',
            '',
            '1. Em uma tigela, coloque todo o coxão duro e tempere com suco de limão, vinagre, sal a gosto e pimenta do reino.',
            '',
            '2. Pegue a sua panela de pressão e coloque um fio de óleo no fundo. Acrescente a cebola picada, o açúcar e misture bastante.',
            '',
            '3. Leve ao fogão e fique mexendo para que a cebola comece a dourar por igual.',
            '',
            '4. Assim que começar a dourar coloque os bifes e mexa.',
            '',
            '5. A carne irá começar a soltar água então, espere que ela seque para colocar na pressão.',
            '',
            '6. Coloque água até cobrir os bifes, mas cuidado para não lotar a panela.',
            '',
            '7. Coloque a tampa de pressão e depois de 20 minutos ou quando começar a apitar, ela estará pronta.',
            '',
            '',
          ],
        },
        
        
      ],
      category: 'Bovino',
    },
    
    {
      id: 4,
      title: 'Linguiça recheada com queijo',
      image: 'https://receitinhas.com.br/wp-content/uploads/2022/05/Linguica-recheada-com-queijo-imagem-por-receita-de-minuto-730x365.jpg',
      preparationTime: '1h20m',
      difficulty: 'Fácil',
      portion: '7',
      ingredients: [
        {
          section: '',
          items: [
            '7 linguiças para churrasco.',
            '200g de muçarela.',
            '1 cebola.',
            '1 tomate.',
            '5 colheres (sopa) de requeijão cremoso.',
            'Sal a gosto.',
          ],
        },
        
        
      ],
      instructions: [
        {
          items: [
            '',
            '',
            '1. Faça um refogado com todos os ingredientes, exceto o queijo muçarela.',
            '',
            '2. Corte as linguiças ao meio, abra bem onde você cortou e afunde até que fique suficiente para colocar o recheio.',
            '',
            '3. Preencha com o recheio, e finalize com a muçarela.',
            '',
            '4. Leve para assar a 180°C por 35 minutos.',
            '',
            '',
          ],
        },
        
        
      ],
      category: 'Suíno',
    },

    {
      id: 5,
      title: 'Picanha Suína',
      image: 'https://static.itdg.com.br/images/640-400/2a07f5234c51d1df50e4b81d6d457777/328610-original.jpg',
      preparationTime: '1h30m',
      difficulty: 'Fácil',
      portion: '8',
      ingredients: [
        {
          section: '',
          items: [
            '1 peça de picanha suína temperada (aproximadamente 1,2 kg).',
            '6 dentes de alho grandes amassados.',
            '1/2 xícara (chá) de margarina derretida.',
            'Suco de 1 limão.',
            '500 g de mandioca cozida com água e sal e cortada em palitos.',
            'Orégano a gosto.',
          ],
        },
        
        
      ],
      instructions: [
        {
          items: [
            '',
            '',
            '1. Pegue a peça de picanha suína (que já vem temperada) coloque sobre um papel alumínio (dentro de uma assadeira forrada).',
            '',
            '2. Faça uma pastinha com o alho e o suco de limão e espalhe por cima da carne.',
            '',
            '3. Feche o papel alumínio e leve para assar em forno pré-aquecido alto por uns 40 minutos.',
            '',
            '4. Retire o papel alumínio, volte a picanha na assadeira, espalhe a mandioca cozida ao lado, regue os pedaços de mandioca com margarina e polvilhe orégano.',
            '',
            '5. Deixe no forno até a carne ficar douradinha e crocante (por causa do alho).',
            '',
            '6. Fatie e sirva com arroz branco, salada verde e limão.',
            '',
            '',
          ],
        },
        
        
      ],
      category: 'Suíno',
    },
    {
      id: 6,
      title: 'Picadinho de Coxão Mole Suíno ao Vinho Tinto',
      image: 'https://img.cybercook.com.br/receitas/791/picadinho-de-coxao-mole-suino-ao-vinho-tinto-840x480.jpeg?q=75',
      preparationTime: '3h30m',
      difficulty: 'Médio',
      portion: '8',
      ingredients: [
        {
          section: '',
          items: [
            '800 gr de coxão mole suíno.',
            '200 ml de vinho tinto.',
            '3 dentes de alho.',
            '1 unidade de cenoura em tiras.',
            '1 talo de salsão.',
            '1 ramo de alecrim.',
            '2 colheres (sopa) de azeite de oliva.',
            '200 gr de ervilha congelada.',
            'Salsinha a gosto.',
            'Sal e pimenta-do-reino a gosto.',
          ],
        },
        
        
      ],
      instructions: [
        {
          items: [
            '',
            '',
            '1. Corte a carne de porco em cubos pequenos, coloque numa travessa e cubra com o vinho.',
            '',
            '2. Adicione o alho em fatias, a cenoura e o salsão em rodelas grossas, alguns grãos de pimenta-do-reino e o alecrim.',
            '',
            '3. Misture para distribuir bem os temperos, cubra com o filme plástico e deixe marinar na geladeira por pelo menos 2 horas.',
            '',
            '4. Em seguida, aqueça o azeite numa caçarola antiaderente, junte a carne e os legumes bem escorridos da marinada e refogue de modo que a carne doure de modo uniforme.',
            '',
            '5. Tempere com sal, regue com uma concha da marinada e deixe ferver, em fogo baixo, por cerca de 30 minutos, juntando mais caldo da marinada, se necessário.',
            '',
            '6. Adicione as ervilhas, deixadas previamente em temperatura ambiente, misture e prossiga o cozimento por 10 minutos.',
            '',
            '7. Retire a carne do fogo, polvilhe com bastante salsinha picada e com 1 bela pitada de pimenta-do-reino e sirva em seguida.',
            '',
            '',
          ],
        },
        
        
      ],
      category: 'Suíno',
    },

    {
      id: 7,
      title: 'Coxa de frango com ervas',
      image: 'https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-coxa-de-frango-com-ervas.jpg?quality=85',
      preparationTime: '30 minutos',
      difficulty: 'Fácil',
      portion: '6',
      ingredients: [
        {
          section: '',
          items: [
            '6 unidades de coxa de frango sem pele. ',
            '2 xícaras (chá) de farinha de rosca.',
            '2 colheres (sopa) de ervas secas (salsinha, cebolinha, orégano, manjericão).',
            '1 colher (chá) de pimenta-do-reino amassada grosseiramente.',
            '3 unidades de gema de ovo.',
            'sal grosso a gosto.',
            
          ],
        },
  
      ],
      instructions: [
        {
          items: [
            '',
            '',
            '1. Misture a farinha de rosca com as ervas secas, a pimenta e o sal grosso.',
            '',
            '2. Passe as coxas nas gemas batidas e envolva-as com a mistura de farinha.',
            '',
            '3. Pressione com as mãos para grudar e formar uma crosta.',
            '',
            '4. Asse em forno médio (170 ºC a 190 ºC), preaquecido, por aproximadamente 30 minutos ou até dourar.',
            '',
            '',
          ],
        },
        
        
      ],
      category: 'Frango',
    },
  
    {
      id: 8,
      title: 'Coração de frango',
      image: 'https://static.itdg.com.br/images/640-400/a3627b01f20137b6e24dc62987a03e72/350405-original.jpg',
      preparationTime: '30 minutos',
      difficulty: 'Fácil',
      portion: '4',
      ingredients: [
        {
          section: '',
          items: [
            '500 g de coração de frango.',
            '1/2 pimentão amarelo.',
            '1 xícara de vinagre balsâmico.',
            'pimenta-do-reino ou branca.',
            '1 cebola grande picada.',
            '3 dentes de alho amassados.',
            '1 limão.',
            'sal.',
            
          ],
        },
        
        
      ],
      instructions: [
        {
          items: [
            '',
            '',
            '1. Limpe o excesso de gordura do coração de frango.',
            '',
            '2. Tempere com sal, pimenta-do-reino ou pimenta branca.',
            '',
            '3. Misture com o suco do limão e o vinagre balsâmico que dá um gosto especial na receita.',
            '',
            '4. Corte a cebola em rodelas e os pimentões em cubos.',
            '',
            '5. Leve ao fogo em uma frigideira grande em fogo médio refogando tudo ao mesmo tempo junto com todo o caldo que se formou do tempero.',
            '',
            '6. Em 20 minutos estará pronto.',
            '',
            '7. Este prato é um ótimo aperitivo, para acompanhar uma farofa de banana e vinagrete e uma cervejinha gelada.',
            '',
            '',
          ],
        },
        
        
      ],
      category: 'Frango',
    },

    {
      id: 9,
      title: 'Asa de frango',
      image: 'https://www.sabornamesa.com.br/media/k2/items/cache/5f6cc6be54b220e9d450a5b9c3eb9016_XL.jpg',
      preparationTime: '2 horas',
      difficulty: 'Fácil',
      portion: '10',
      ingredients: [
        {
          section: '',
          items: [
            'Papel alumínio.',
            'Suco de 1 limão.',
            'Pimenta calabresa a gosto.',
            'Molho shoyu a gosto.',
            '1 colher de sopa de sal.',
            '2 kg de asinhas de frango sem a pontinha do osso.',
            '1/2 colher de sopa de páprica doce.',
            '4 dentes de alho triturado.',
            '1/2 colher de sopa de tempero baiano.',
            '1/2 colher de sopa de açafrão.',
            
          ],
        },
        
        
      ],
      instructions: [
        {
          items: [
            '',
            '',
            '1. Em uma vasilha despeje todas as suas asinhas e tempere com sal, alho, açafrão, tempero baiano, páprica e pimenta calabresa e shoyu tudo a gosto.',
            '',
            '2. Misture bem, de modo que todo o frango fique envolvido pelo tempero. Reserve para marinar por cerca de 30 minutos ou mais.',
            '',
            '3. Passado o tempo, acrescente suco de um limão. Mexa bem e logo em seguida leve para o refratário onde vai assar.',
            '',
            '4. Organize bem, para que os pedaços não fiquem um em cima do outro, para ajudar no cozimento, despeje todo o líquido advindo do frango e do tempero sobre o frango.',
            '',
            '5. Cubra com papel alumínio e leve ao forno preaquecido a 180° por cerca de 1 hora.',
            '',
            '6. Passado o tempo, retire o papel alumínio, regue o frango com seu próprio caldo e leve novamente para o forno, dessa vez deixe assar por 30 minutos ou até dourar.',
            '',
            '7. Quando estiver bem dourado e crocante, retire do forno e sirva.',
            '',
            '',
          ],
        },
        
        
      ],
      category: 'Frango',
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
