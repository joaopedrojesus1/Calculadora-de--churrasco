import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BottomTabNavigator from './src/components/Navigation';
import HomeScreen from './src/pages/home';
import PedidosScreen from './src/pages/pedidos';
import Header from './src/components/header/header';

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
          }}
        />
        <Tab.Screen
          name="Pedidos"
          component={PedidosScreen}
          options={({ navigation }) => ({
            tabBarLabel: 'Pedidos',
            tabBarIcon: 'fastfood',
            tabBarButton: () => (
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Extrato')}
              >
                <Text style={styles.buttonText}>Finalizar</Text>
              </TouchableOpacity>
            ),
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
