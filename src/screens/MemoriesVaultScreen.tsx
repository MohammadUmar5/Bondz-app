import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export const MemoriesVaultScreen: React.FC = () => {
  return (
    <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.headerTitle}>Memories Vault</Text>
    </View>
  );
};