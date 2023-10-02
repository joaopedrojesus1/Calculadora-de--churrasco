import React, { useState } from 'react';

import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const RecipeCard = ({ recipe, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(recipe)} activeOpacity={1}>
      <View style={styles.container}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Image source={{ uri: recipe.image }} style={{ width: 300, height: 200,   }} />
      </View>
    </TouchableOpacity>
  );
};

const RecipeListPage = ({ recipes, onPressRecipe }) => {
  return (
    <View>
      
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} onPress={onPressRecipe} />
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#A52A2A',
        margin: 15,
        elevation: 2,
        alignItems: 'center',
        paddingBottom: 25,
        borderRadius: 30,
        
    },
    
    title: {
        fontSize: 17,
        padding: 5,
        fontWeight: 'bold',
        color:'#fff',
    }
  });

export default RecipeListPage;