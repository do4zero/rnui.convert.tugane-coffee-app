import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import colors from './src/config/colors';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.dark }}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({});
