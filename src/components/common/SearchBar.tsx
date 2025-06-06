import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
const Icon =
  require("react-native-vector-icons/MaterialCommunityIcons").default;
import { COLORS } from "../../constants/colors";

interface SearchBarProps {
  searchText: string;
  onSearchTextChange: (text: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  searchText,
  onSearchTextChange,
}) => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <Icon
          name="magnify"
          size={20}
          color={COLORS.TEXT_SECONDARY}
          style={styles.searchIcon}
        />
        <TextInput
          placeholder="Search collections..."
          placeholderTextColor={COLORS.TEXT_SECONDARY}
          value={searchText}
          onChangeText={onSearchTextChange}
          style={styles.searchInput}
          clearButtonMode="while-editing"
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  searchWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderRadius: 25,
    paddingHorizontal: 16,
    height: 48,
    borderWidth: 1,
    borderColor: "white",
  },
  searchIcon: {
    marginRight: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    fontWeight: "400",
  },
});
