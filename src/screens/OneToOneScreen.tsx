import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export const OneToOneScreen: React.FC = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.headerTitle}>1:1</Text>
    </View>
  );
};