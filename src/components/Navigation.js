import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from 'react-native';

export default function CustomTabBar({ state, descriptors, navigation }) {
  const [indicatorPosition] = useState(new Animated.Value(0));

  const onTabPress = (route, index) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!event.defaultPrevented) {
      navigation.navigate(route.name);
      Animated.spring(indicatorPosition, {
        toValue: index * (Dimensions.get('window').width / state.routes.length),
        useNativeDriver: false,
      }).start();
    }
  };

  useEffect(() => {
    Animated.spring(indicatorPosition, {
      toValue: state.index * (Dimensions.get('window').width / state.routes.length),
      useNativeDriver: false,
    }).start();
  }, [state.index]);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => onTabPress(route, index)}
            style={styles.tab}
          >
            <Text style={styles.tabText}>{label}</Text>
          </TouchableOpacity>
        );
      })}
      <Animated.View style={[styles.indicator, { left: indicatorPosition,  top: 3}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#D72519',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  tabText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  indicator: {
    position: 'absolute',
    backgroundColor: '#fff',
    height: 3,
    width: Dimensions.get('window').width / 2, // Largura igual à largura da tela dividida pelo número de abas
  },
});
