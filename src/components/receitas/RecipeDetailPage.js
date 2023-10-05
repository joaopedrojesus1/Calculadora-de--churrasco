import React from 'react';
import { View, Text, Image, TouchableOpacity, Modal, StyleSheet, ScrollView } from 'react-native';

const RecipeDetailPage = ({ recipe, onClose }) => {
  return (
    <Modal visible={true} onRequestClose={onClose}>
      <View style={styles.container}>
        
        <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.title}>{recipe.title}</Text>
          <Image source={{ uri: recipe.image }} style={{ width: 300, height: 200,margin: 25, borderRadius: 10 }} />
          <View style={styles.div}>
            <Text style={styles.color}>Tempo de Preparo: {recipe.preparationTime}</Text>
            <Text style={styles.color}>Nível de Dificuldade: {recipe.difficulty}</Text>
            <Text style={styles.color}>Categoria: {recipe.category} </Text>
          </View>
          
          <View style={styles.divIngredientes}>
          <Text style={{ fontWeight: 'bold', color: '#fff' }}>
            {recipe.portion ? `Ingredientes (${recipe.portion} porções)` : 'Ingredientes'} {/* Verifica se existe o recipe.portion */}
          </Text>
          {recipe.ingredients.map((section, index) => (
            <View key={index}>
              <Text style={{ fontWeight: '500', marginTop: 10, color: '#fff' }}>{section.section}</Text>
              <Text style={{ fontWeight: '200', marginTop: 10, color: '#fff' }}>{section.items.join('\n')}</Text>
            </View>
          ))}
          </View>

          <View style={styles.divPreparo}>
          <Text style={{ fontWeight: '500', color: '#fff'}}>Modo de Preparo</Text>
          {recipe.instructions.map((section, index) => (
            <View key={index}>
              <Text style={{ fontWeight: '500', marginTop: 10, color: '#fff' }}>{section.section}</Text>
              <Text style={{ fontWeight: '200', marginTop: 10, color: '#fff' }}>{section.items.join('\n')}</Text>
            </View>
          ))}
          </View>
          <TouchableOpacity onPress={onClose} style={styles.divClose}>
            <Text style={styles.color}>Fechar</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  title: {
    fontSize: 17,
    padding: 5,
    fontWeight: 'bold',
    color:'#A52A2A',
  },
  div: {
    backgroundColor: '#A52A2A',
    margin: 15,
    elevation: 2,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    
  },
  divIngredientes: {
    backgroundColor: '#A52A2A',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  divPreparo: {
    backgroundColor: '#A52A2A',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
  },
  divClose:{
    backgroundColor: '#A52A2A',
    margin: 15,
    elevation: 2,
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 5,
    width: 65,
  },
  contentContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  color: {
    color: '#fff',
  }
});

export default RecipeDetailPage;