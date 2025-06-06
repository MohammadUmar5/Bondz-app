import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  LayoutAnimation,
} from "react-native";

type Collection = {
  title: string;
  level: string;
  words: string;
  progress: string;
  color: string;
};

interface Props {
  item: Collection;
  index: number;
  isExpanded: boolean;
  expandedIndex: number | null;
  onPress: (index: number) => void;
}

export const MemoryCard: React.FC<Props> = ({
  item,
  index,
  isExpanded,
  expandedIndex,
  onPress,
}) => {
  const isAfterExpanded = expandedIndex !== null && index > expandedIndex;

  let marginTop = 0;
  if (index === 0) marginTop = 20;
  else if (isExpanded) marginTop = -20;
  else if (isAfterExpanded) marginTop = expandedIndex === index - 1 ? 80 : -40;
  else marginTop = -20;

  const cardStyle = {
    backgroundColor: item.color,
    marginTop,
    ...(isExpanded && {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    }),
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        onPress(index);
      }}
      style={[styles.card, cardStyle]}
    >
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Image
          source={{ uri: "https://i.pravatar.cc/150" }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.tagsRow}>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.level}</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>{item.words}</Text>
        </View>
      </View>

      {isExpanded && (
        <View style={styles.expandedContent}>
          <Text style={styles.cardBody}>
            This collection contains vocabulary words focused on{" "}
            {item.title.toLowerCase()}. Perfect for{" "}
            {item.level.toLowerCase()} level learners. You've completed{" "}
            {item.progress} of this collection with {item.words} total.
          </Text>

          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Practice</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.actionButton, styles.secondaryButton]}
            >
              <Text style={[styles.actionButtonText, styles.secondaryButtonText]}>
                Review
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    padding: 20,
    marginBottom: 0,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#111",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#111",
  },
  tagsRow: {
    flexDirection: "row",
    marginTop: 12,
    gap: 8,
  },
  tag: {
    backgroundColor: "white",
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  tagText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
  },
  expandedContent: {
    marginTop: 16,
  },
  cardBody: {
    fontSize: 15,
    color: "#333",
    lineHeight: 22,
    marginBottom: 16,
  },
  actionButtons: {
    flexDirection: "row",
    gap: 12,
  },
  actionButton: {
    backgroundColor: "#000",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  secondaryButton: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#333",
  },
  actionButtonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 14,
  },
  secondaryButtonText: {
    color: "#333",
  },
});
