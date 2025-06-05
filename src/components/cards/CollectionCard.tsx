import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Icon =
  require("react-native-vector-icons/MaterialCommunityIcons").default;
import { Collection } from "../../types";
import { COLORS } from "../../constants/colors";

interface CollectionCardProps {
  item: Collection;
  onPress: (tag: string) => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.collectionBar}
      onPress={() => onPress(item.tag)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={[COLORS.CARD_BG, `${COLORS.CARD_BG}99`]}
        style={styles.barGradient}
      >
        <View style={styles.barAccent}>
          <LinearGradient
            colors={["#FF6B6B", "#4ECDC4"] as const}
            style={styles.accentGradient}
          />
        </View>

        <View style={styles.barContent}>
          <View style={styles.barLeft}>
            <View style={styles.tagContainer}>
              <Text style={styles.collectionTag} numberOfLines={1}>
                {item.tag}
              </Text>
              {item.isActive && <View style={styles.activeIndicator} />}
            </View>
            <Text style={styles.categoryText}>{item.category}</Text>
            <Text style={styles.lastUpdated}>{item.lastUpdated}</Text>
          </View>

          <View style={styles.barRight}>
            <View style={styles.statItem}>
              <Icon
                name="image-multiple"
                size={16}
                color={COLORS.TEXT_SECONDARY}
              />
              <Text style={styles.statText}>{item.memories.length}</Text>
            </View>
            <View style={styles.statItem}>
              <Icon
                name="account-multiple"
                size={16}
                color={COLORS.TEXT_SECONDARY}
              />
              <Text style={styles.statText}>{item.contributors}</Text>
            </View>
            <Icon name="chevron-right" size={20} color={COLORS.ACCENT} />
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  collectionBar: {
    marginBottom: 16,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
  },
  barGradient: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    minHeight: 80,
  },
  barAccent: {
    width: 4,
    height: 60,
    borderRadius: 2,
    marginRight: 16,
    overflow: "hidden",
  },
  accentGradient: {
    flex: 1,
    width: "100%",
  },
  barContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  barLeft: {
    flex: 1,
    marginRight: 16,
  },
  tagContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  collectionTag: {
    color: COLORS.TEXT_PRIMARY,
    fontSize: 20,
    fontWeight: "700",
    marginRight: 8,
    flex: 1,
  },
  categoryText: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    marginBottom: 4,
  },
  activeIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#4CAF50",
  },
  lastUpdated: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 13,
    fontWeight: "400",
  },
  barRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  statItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  statText: {
    color: COLORS.TEXT_SECONDARY,
    fontSize: 14,
    fontWeight: "500",
  },
});
