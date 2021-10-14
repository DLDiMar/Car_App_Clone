import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarItem from './components/CarItem/index';


export default function App() {
  return (
    <View>
      <CarItem />
      <Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

