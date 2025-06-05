import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export const HomeScreen: React.FC = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.headerTitle}>Home</Text>
    </View>
  );
};