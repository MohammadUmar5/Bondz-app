import React, { useState } from "react";
import { View, Text, ScrollView, Platform, UIManager, Alert, Dimensions } from "react-native";
import { MemoryCard } from "../components/cards/MyBondzCard";
import { MemoryCollectionCard } from "../components/cards/MemoryCollectionCard";
import { collections } from "../constants/my-bondz";
import { memorySections, MemoryItem, MemorySection } from "../constants/my-memories";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const MemoriesVaultScreen: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [sections, setSections] = useState<MemorySection[]>(memorySections);
  const [expandedSectionId, setExpandedSectionId] = useState<string | null>(null);

  const handlePress = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleMemoryPress = (sectionId: string) => {
    setExpandedSectionId(expandedSectionId === sectionId ? null : sectionId);
  };

  const handleAddMemory = (sectionId: string, sectionTitle: string) => {
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
    <View style={{ 
      flex: 1, 
      backgroundColor: "#000", 
      paddingTop: 50 
    }}>
      <Text style={{ 
        fontSize: 35, 
        fontWeight: "800", 
        color: "#fff", 
        marginHorizontal: 25, 
        marginBottom: 20 
      }}>
        My collections
      </Text>
      <View
        style={{
          height: 1,
          backgroundColor: "#888888",
          marginLeft: 25,
        }}
      />
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 120 }} 
        showsVerticalScrollIndicator={false}
      >
        {/* Memories Section - iPhone Style */}
        <View style={{ marginBottom: 30, marginTop: 20 }}>
          <View style={{ 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginHorizontal: 25, 
            marginBottom: 20 
          }}>
            <Text style={{ 
              fontSize: 30, 
              fontWeight: "700", 
              color: "#fff" 
            }}>
              Memories
            </Text>
            <Text style={{ 
              fontSize: 14, 
              color: "#007AFF", 
              fontWeight: "500" 
            }}>
              See All
            </Text>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ 
              paddingHorizontal: (screenWidth * 0.05)
            }}
            pagingEnabled={false}
            decelerationRate="fast"
            snapToInterval={screenWidth * 0.9 + 20}
            snapToAlignment="start"
          >
            {sections.map((section) => (
              <MemoryCollectionCard
                key={section.id}
                section={section}
                onMemoryPress={() => handleMemoryPress(section.id)}
                onAddPress={handleAddMemory}
                expanded={expandedSectionId === section.id}
              />
            ))}
          </ScrollView>
        </View>

        {/* My Bondz Section */}
        <View style={{ marginBottom: 30, paddingHorizontal: 15 }}>
          <Text style={{ 
            fontSize: 30, 
            fontWeight: "700", 
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