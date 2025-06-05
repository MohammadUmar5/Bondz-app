import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Icon =
  require("react-native-vector-icons/MaterialCommunityIcons").default;
import { Collection } from "../../types";
import { COLORS } from "../../constants/colors";

interface TrendingCardProps {
  item: Collection;
  onPress: (tag: string) => void;
}

export const TrendingCard: React.FC<TrendingCardProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.trendingCard}
      onPress={() => onPress(item.tag)}
      activeOpacity={0.8}
    >
      <LinearGradient
        colors={["#FF6B6B", "#4ECDC4"] as const}
        style={styles.trendingGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.trendingContent}>
          <Text style={styles.trendingTag} numberOfLines={1}>
            {item.tag}
          </Text>
          <Text style={styles.trendingCategory} numberOfLines={1}>
            {item.category}
          </Text>
          <View style={styles.trendingStats}>
            <View style={styles.trendingStat}>
              <Icon
                name="image-multiple"
                size={12}
                color="rgba(255,255,255,0.9)"
              />
              <Text style={styles.trendingStatText}>
                {item.memories.length}
              </Text>
            </View>
            <View style={styles.trendingStat}>
              <Icon
                name="account-multiple"
                size={12}
                color="rgba(255,255,255,0.9)"
              />
              <Text style={styles.trendingStatText}>{item.contributors}</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  trendingCard: {
    width: 130,
    height: 140,
    borderRadius: 20,
    overflow: "hidden",
  },
  trendingGradient: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  trendingContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  trendingTag: {
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 4,
  },
  trendingCategory: {
    fontSize: 12,
    color: "rgba(255,255,255,0.8)",
    fontWeight: "500",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  trendingStats: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  trendingStat: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  trendingStatText: {
    fontSize: 12,
    color: "rgba(255,255,255,0.9)",
    fontWeight: "600",
  },
});
