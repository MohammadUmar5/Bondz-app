import React, { useState, useMemo } from 'react';
import { SafeAreaView, View, Text, StatusBar, FlatList, ScrollView } from 'react-native';
import { SearchBar } from '../components/common/SearchBar';
import { BackButton } from '../components/common/BackButton';
import { TrendingCard } from '../components/cards/TrendingCard';
import { CollectionCard } from '../components/cards/CollectionCard';
import { MasonryGrid } from '../components/lists/MasonryGrid';
import { collections, trendingCollections } from '../constants/data';
import { COLORS } from '../constants/colors';
import { globalStyles } from '../styles/globalStyles';
import { StyleSheet } from "react-native"; // Ensure StyleSheet is imported correctly

export const EchoesScreen: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchText, setSearchText] = useState("");

  const filteredCollections = useMemo(() => {
    if (!searchText.trim()) return collections;
    return collections.filter((c) =>
      c.tag.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText]);

  const selectedCollection = collections.find((c) => c.tag === selectedTag) || collections[0];

  return (
    <SafeAreaView style={[globalStyles.container, { backgroundColor: COLORS.BG }]}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.BG} />

      <View style={globalStyles.headerContainer}>
        <Text style={globalStyles.headerTitle} numberOfLines={1}>
          {selectedTag ?? "Echoes"}
        </Text>
        <Text style={globalStyles.headerSubtitle}>
          {selectedTag ? "Collection" : "Discover global memories"}
        </Text>
      </View>

      {!selectedTag && (
        <>
          <SearchBar searchText={searchText} onSearchTextChange={setSearchText} />

          <View style={styles.trendingSection}>
            <View style={globalStyles.sectionHeader}>
              <Text style={globalStyles.sectionTitle}>Trending</Text>
              <Text style={globalStyles.sectionSubtitle}>What's happening now</Text>
            </View>
            <FlatList
              data={trendingCollections}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => `trending-${item.tag}`}
              renderItem={({ item }) => (
                <TrendingCard item={item} onPress={setSelectedTag} />
              )}
              contentContainerStyle={styles.trendingList}
              ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
            />
          </View>
        </>
      )}

      {selectedTag ? (
        <View style={styles.selectedContainer}>
          <BackButton onPress={() => setSelectedTag(null)} />
          <MasonryGrid memories={selectedCollection.memories} />
        </View>
      ) : (
        <ScrollView style={styles.listContainer} showsVerticalScrollIndicator={false}>
          <View style={styles.allCollectionsSection}>
            <View style={globalStyles.sectionHeader}>
              <Text style={globalStyles.sectionTitle}>All Collections</Text>
              <Text style={globalStyles.sectionSubtitle}>Browse by category</Text>
            </View>

            {filteredCollections.map((item) => (
              <CollectionCard key={item.tag} item={item} onPress={setSelectedTag} />
            ))}

            {filteredCollections.length === 0 && (
              <View style={globalStyles.emptyContainer}>
                <Text style={globalStyles.emptyText}>No collections found.</Text>
              </View>
            )}
          </View>
          <View style={{ height: 120 }} />
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  trendingSection: {
    width: "100%",
    marginBottom: 32,
  },
  trendingList: {
    paddingHorizontal: 20,
  },
  allCollectionsSection: {
    paddingHorizontal: 20,
  },
  selectedContainer: {
    flex: 1,
    width: "100%",
    backgroundColor: COLORS.BG,
  },
  listContainer: {
    flex: 1,
    width: "100%",
  },
});