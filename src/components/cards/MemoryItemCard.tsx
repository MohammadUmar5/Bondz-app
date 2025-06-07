import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

type MemoryItem = {
  id: string;
  type: "image" | "video" | "text";
  content: string;
  title?: string;
  thumbnail?: string;
};

interface Props {
  item: MemoryItem;
  onPress: (item: MemoryItem) => void;
}

export const MemoryItemCard: React.FC<Props> = ({ item, onPress }) => {
  const renderContent = () => {
    switch (item.type) {
      case "image":
        return (
          <Image
            source={{ uri: item.content }}
            style={styles.mediaContent}
            resizeMode="cover"
          />
        );
      case "video":
        return (
          <View style={styles.videoContainer}>
            <Image
              source={{ uri: item.thumbnail || item.content }}
              style={styles.mediaContent}
              resizeMode="cover"
            />
            <View style={styles.playButton}>
              <Text style={styles.playIcon}>▶</Text>
            </View>
          </View>
        );
      case "text":
        return (
          <View style={styles.textContainer}>
            <Text style={styles.textContent} numberOfLines={6}>
              {item.content}
            </Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(item)}
      activeOpacity={0.8}
    >
      {renderContent()}
      {item.title && (
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
 card: {
    width: screenWidth * 0.42,
    height: screenHeight * 0.35,
    borderRadius: 12,
    backgroundColor: "#f8f9fa",
    marginRight: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mediaContent: {
    width: "100%",
    flex: 1,
  },
  videoContainer: {
    flex: 1,
    position: "relative",
  },
  playButton: {
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
  playIcon: {
    color: "#fff",
    fontSize: 12,
    marginLeft: 2,
  },
  textContainer: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  textContent: {
    fontSize: 12,
    color: "#333",
    lineHeight: 16,
    textAlign: "center",
  },
  titleContainer: {
    padding: 8,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
  title: {
    fontSize: 10,
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
  },
});