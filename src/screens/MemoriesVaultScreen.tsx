import React, { useState } from "react";
import { View, Text, ScrollView, Platform, UIManager, Alert } from "react-native";
import { SearchBar } from "../components/common/SearchBar";
import { MemoryCard } from "../components/cards/MyBondzCard";
import { MemoryItemCard } from "../components/cards/MemoryItemCard";
import { MemorySectionHeader } from "../components/common/MemorySectionHeader";
import { collections } from "../constants/my-bondz";
import { memorySections, MemoryItem, MemorySection } from "../constants/my-memories";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const MemoriesVaultScreen: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const [sections, setSections] = useState<MemorySection[]>(memorySections);

  const handlePress = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleMemoryPress = (item: MemoryItem) => {
    // Handle memory item press - you can implement modal or navigation here
  };

  const handleAddToSection = (sectionId: string, sectionTitle: string) => {
    Alert.alert(
      "Add Memory",
      `Add new memory to "${sectionTitle}"`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Photo",
          onPress: () => console.log(`Add photo to section: ${sectionId}`),
        },
        {
          text: "Video",
          onPress: () => console.log(`Add video to section: ${sectionId}`),
        },
        {
          text: "Text",
          onPress: () => console.log(`Add text to section: ${sectionId}`),
        },
      ]
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#000", paddingHorizontal: 15, paddingTop: 50 }}>
      <Text style={{ fontSize: 26, fontWeight: "300", color: "#fff", marginHorizontal: 10, marginBottom: 20 }}>
        My collections
      </Text>

      <SearchBar searchText={searchText} onSearchTextChange={setSearchText} />

      <ScrollView contentContainerStyle={{ paddingBottom: 120 }} showsVerticalScrollIndicator={false}>
        {/* My Memories Section - Now First */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ 
            fontSize: 20, 
            fontWeight: "600", 
            color: "#fff", 
            marginHorizontal: 10, 
            marginBottom: 15 
          }}>
            Memories
          </Text>
          
          {sections.map((section) => (
            <View key={section.id} style={{ marginBottom: 20 }}>
              <MemorySectionHeader
                title={section.sectionTitle}
                description={section.description}
                onAddPress={() => handleAddToSection(section.id, section.sectionTitle)}
              />
              <ScrollView 
                horizontal 
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 10 }}
              >
                {section.memories.map((item) => (
                  <MemoryItemCard
                    key={item.id}
                    item={item}
                    onPress={handleMemoryPress}
                  />
                ))}
              </ScrollView>
            </View>
          ))}
        </View>

        {/* My Bondz Section - Now Second */}
        <View style={{ marginBottom: 30 }}>
          <Text style={{ 
            fontSize: 20, 
            fontWeight: "600", 
            color: "#fff", 
            marginHorizontal: 10, 
            marginBottom: 15 
          }}>
            My Bondz
          </Text>
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
        </View>
      </ScrollView>
    </View>
  );
};