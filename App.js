import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, Image } from 'react-native';
import BottomTabNavigator from './src/components/Navigation';
import HomeScreen from './src/components/home';
import PedidosScreen from './src/components/pedidos';
import Header from './src/components/header/header';
import {GoHomeFill} from 'react-icons/go'

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer styles={StyleSheet.body}>
    <Tab.Navigator
      tabBar={(props) => <BottomTabNavigator {...props} />}
      screenOptions={{
        header: ({ route }) => <Header route={route} />, // Passe a prop route para o cabeçalho personalizado
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} styles={StyleSheet.home}  
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: 'home-filled'
        }}/>
      <Tab.Screen name="Pedidos" component={PedidosScreen}  styles={StyleSheet.pedidos}  
        options={{
          tabBarLabel: 'Pedidos',
          tabBarIcon: 'fastfood'
        }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  body:{
    position: 'relative'
  }
});
