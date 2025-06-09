import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Modal,
  Pressable,
} from "react-native";
import { MemorySection, MemoryItem } from "../../constants/my-memories";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

interface Props {
  section: MemorySection;
  onMemoryPress: () => void;
  onAddPress: (sectionId: string, sectionTitle: string) => void;
  expanded?: boolean;
}

export const MemoryCollectionCard: React.FC<Props> = ({
  section,
  onMemoryPress,
  onAddPress,
  expanded = false,
}) => {
  const [modalVisible, setModalVisible] = useState(false);

  // Only show the first memory (thumbnail)
  const thumbnail = section.memories[0];
  const extraMemories = section.memories.slice(1);

  return (
    <View style={styles.container}>
      {/* Thumbnail */}
      <TouchableOpacity
        style={styles.featuredContainer}
        onPress={() => {
          onMemoryPress();
          if (section.memories.length > 1) setModalVisible(true);
        }}
        activeOpacity={0.9}
      >
        {thumbnail.type === "image" ? (
          <Image
            source={{ uri: thumbnail.content }}
            style={styles.fullImage}
            resizeMode="cover"
          />
        ) : thumbnail.type === "video" ? (
          <View style={styles.featuredVideoContainer}>
            <Image
              source={{ uri: thumbnail.thumbnail || thumbnail.content }}
              style={styles.fullImage}
              resizeMode="cover"
            />
            <View style={styles.featuredPlayButton}>
              <Text style={styles.featuredPlayIcon}>▶</Text>
            </View>
          </View>
        ) : (
          <View style={styles.featuredTextContainer}>
            <Text style={styles.featuredTextContent}>
              {thumbnail.content}
            </Text>
          </View>
        )}
        {/* Overlay info */}
        <View style={styles.gradientOverlay} />
        <View style={styles.featuredInfo}>
          <Text style={styles.featuredTitle}>
            {thumbnail.title || section.sectionTitle}
          </Text>
          <Text style={styles.memoryCount}>
            {section.memories.length} {section.memories.length === 1 ? 'memory' : 'memories'}
          </Text>
        </View>
      </TouchableOpacity>

      {/* Add Memory Button if only one memory */}
      {section.memories.length === 1 && (
        <View style={styles.singleAddContainer}>
          <TouchableOpacity
            style={[styles.memoryItem, styles.addMemoryButton]}
            onPress={() => onAddPress(section.id, section.sectionTitle)}
            activeOpacity={0.7}
          >
            <View style={styles.addIconContainer}>
              <Text style={styles.addIcon}>+</Text>
            </View>
            <Text style={styles.addMemoryText}>Add Memory</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal for extra memories */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={false}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{section.sectionTitle}</Text>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButton}>✕</Text>
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={styles.modalScrollContent}>
            <View style={styles.gridContainer}>
              {section.memories.map((item, idx) => (
                <View key={item.id} style={styles.gridItem}>
                  {item.type === "image" ? (
                    <Image
                      source={{ uri: item.content }}
                      style={styles.gridImage}
                      resizeMode="cover"
                    />
                  ) : item.type === "video" ? (
                    <View style={styles.gridVideoContainer}>
                      <Image
                        source={{ uri: item.thumbnail || item.content }}
                        style={styles.gridImage}
                        resizeMode="cover"
                      />
                      <View style={styles.gridPlayButton}>
                        <Text style={styles.gridPlayIcon}>▶</Text>
                      </View>
                    </View>
                  ) : (
                    <View style={styles.gridTextContainer}>
                      <Text style={styles.gridTextContent} numberOfLines={4}>
                        {item.content}
                      </Text>
                    </View>
                  )}
                  {item.title && (
                    <Text style={styles.gridMemoryTitle} numberOfLines={1}>
                      {item.title}
                    </Text>
                  )}
                </View>
              ))}
              {/* Add Memory Button in grid */}
              <TouchableOpacity
                style={[styles.gridItem, styles.addMemoryButton]}
                onPress={() => {
                  setModalVisible(false);
                  onAddPress(section.id, section.sectionTitle);
                }}
                activeOpacity={0.7}
              >
                <View style={styles.addIconContainer}>
                  <Text style={styles.addIcon}>+</Text>
                </View>
                <Text style={styles.addMemoryText}>Add Memory</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

// Update gridItemSize to fit 3 items per row with margin
const gridItemMargin = 10;
// The container width is screenWidth * 0.9, so use that for calculation:
const gridContainerWidth = screenWidth * 0.9;
const gridItemSize = (gridContainerWidth - gridItemMargin * 4) / 3;

const styles = StyleSheet.create({
  container: {
    width: gridContainerWidth,
    marginRight: 20,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "transparent",
  },
  featuredContainer: {
    width: "99%",
    height: screenHeight * 0.55,
    borderRadius: 30,
    overflow: "hidden",
    marginHorizontal: 0,
    marginBottom: 0,
    backgroundColor: "transparent",
    position: "relative",
  },
  fullImage: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
  },
  featuredVideoContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  featuredPlayButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  featuredPlayIcon: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 3,
  },
  featuredTextContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    height: "100%",
  },
  featuredTextContent: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
    lineHeight: 22,
  },
  gradientOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
  featuredInfo: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 16,
  },
  featuredTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 2,
  },
  memoryCount: {
    fontSize: 14,
    color: "#e5e5e7",
    opacity: 0.8,
  },
  singleAddContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: "flex-start",
  },
  memoryItem: {
    width: 80,
    height: 100,
    marginRight: 12,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#2c2c2e",
  },
  addMemoryButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    borderWidth: 1,
    borderColor: "#48484a",
    borderStyle: "dashed",
  },
  addIconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#48484a",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  addIcon: {
    fontSize: 14,
    color: "#8e8e93",
    fontWeight: "300",
  },
  addMemoryText: {
    fontSize: 8,
    color: "#8e8e93",
    textAlign: "center",
  },
  // Modal styles
  modalContainer: {
    flex: 1,
    backgroundColor: "#111",
    paddingTop: 48,
    paddingHorizontal: 12,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#fff",
  },
  closeButton: {
    fontSize: 28,
    color: "#fff",
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  modalScrollContent: {
    paddingBottom: 40,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    width: gridContainerWidth,
    alignSelf: "center",
  },
  gridItem: {
    width: gridItemSize,
    height: gridItemSize + 36, // slightly taller for title
    margin: gridItemMargin / 2,
    borderRadius: 14,
    overflow: "hidden",
    backgroundColor: "#232323",
    alignItems: "center",
  },
  gridImage: {
    width: "100%",
    height: gridItemSize,
    borderRadius: 0,
  },
  gridVideoContainer: {
    width: "100%",
    height: gridItemSize,
    position: "relative",
  },
  gridPlayButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  gridPlayIcon: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 2,
  },
  gridTextContainer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c2c2e",
    height: gridItemSize,
    width: "100%",
  },
  gridTextContent: {
    fontSize: 12,
    color: "#fff",
    textAlign: "center",
    lineHeight: 16,
  },
  gridMemoryTitle: {
    fontSize: 11,
    color: "#e5e5e7",
    textAlign: "center",
    paddingHorizontal: 4,
    paddingVertical: 4,
    height: 30,
  },
});