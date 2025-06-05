import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
const Icon =
  require("react-native-vector-icons/MaterialCommunityIcons").default;
import { COLORS } from "../../constants/colors";

interface BackButtonProps {
  onPress: () => void;
  text?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({
  onPress,
  text = "Back to Collections",
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.backButton}
      activeOpacity={0.7}
    >
      <Icon name="arrow-left" size={20} color={COLORS.ACCENT} />
      <Text style={styles.backText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 12,
    width: "100%",
  },
  backText: {
    color: COLORS.ACCENT,
    fontSize: 16,
    marginLeft: 6,
    flexShrink: 1,
    fontWeight: "600",
  },
});
