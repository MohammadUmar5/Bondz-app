import React from 'react';
import { View, StyleSheet } from 'react-native';
import MasonryList from 'react-native-masonry-list';
import { Memory } from '../../types';
import { COLORS } from '../../constants/colors';

interface MasonryGridProps {
  memories: Memory[];
}

export const MasonryGrid: React.FC<MasonryGridProps> = ({ memories }) => {
  return (
    <View style={styles.masonryContainer}>
      <MasonryList
        images={memories.map((m) => ({
          uri: m.image,
          id: m.id,
        }))}
        imageContainerStyle={styles.memoryItem}
        spacing={6}
        style={styles.masonryList}
        backgroundColor={COLORS.BG}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  masonryContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.BG,
    paddingHorizontal: 0,
    zIndex: 1,
  },
  masonryList: {
    backgroundColor: COLORS.BG,
  },
  memoryItem: {
    marginLeft: 15,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: COLORS.BG,
  },
});