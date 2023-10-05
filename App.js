import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomTabNavigator from './src/components/Navigation';
import HomeScreen from './src/pages/home';
import Receitas from './src/pages/Receitas';
import PedidosScreen from './src/pages/pedidos';
import Header from './src/components/header/header';
import Navigation2 from './src/components/Navigation2';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <BottomTabNavigator {...props} />}
        screenOptions={{
          header: ({ route }) => <Header route={route} />, // Passe a prop route para o cabeçalho personalizado
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: 'home-filled',
            tabBarItemStyle: {
              display: 'none'
            }
          }}
        />
        <Tab.Screen
          name="Receitas"
          component={Receitas}
          options={{
            tabBarLabel: 'receitas',
            tabBarIcon: '',                          //lunch-dining
            tabBarItemStyle: {
              display: 'none'
            }
          }}
        />
        <Tab.Screen
          name="Pedidos"
          component={Navigation2}
          options={({ navigation }) => ({
            tabBarLabel: 'Pedidos',
            tabBarIcon: 'fastfood', 
            header: () => {return null}  
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    position: 'relative',
  },
  button: {
    // Estilize seu botão "Finalizar" conforme necessário
  },
  buttonText: {
    // Estilize o texto do botão conforme necessário
  },
});
