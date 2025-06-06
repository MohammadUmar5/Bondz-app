import React, { useState } from "react";
import { View, Text, ScrollView, Platform, UIManager } from "react-native";
import { SearchBar } from "../components/common/SearchBar";
import { MemoryCard } from "../components/cards/MemoryCard";
import { collections } from "../constants/collections";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const MemoriesVaultScreen: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  const handlePress = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000", paddingHorizontal: 15, paddingTop: 50 }}>
      <Text style={{ fontSize: 26, fontWeight: "300", color: "#fff", marginHorizontal: 10, marginBottom: 20 }}>
        My collections
      </Text>

      <SearchBar searchText={searchText} onSearchTextChange={setSearchText} />

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {collections.map((item, index) => (
          <MemoryCard
            key={index}
            item={item}
            index={index}
            isExpanded={expandedIndex === index}
            expandedIndex={expandedIndex}
            onPress={handlePress}
          />
        ))}
      </ScrollView>
    </View>
  );
};
