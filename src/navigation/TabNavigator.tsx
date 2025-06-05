import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
const Icon =
  require("react-native-vector-icons/MaterialCommunityIcons").default;
import { HomeScreen } from "../screens/HomeScreen";
import { MemoriesVaultScreen } from "../screens/MemoriesVaultScreen";
import { EchoesScreen } from "../screens/EchoesScreen";
import { OneToOneScreen } from "../screens/OneToOneScreen";
import { COLORS } from "../constants/colors";

const Tab = createBottomTabNavigator();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = "help-circle";
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Memories Vault") iconName = "archive";
          else if (route.name === "Echoes") iconName = "volume-high";
          else if (route.name === "1:1") iconName = "account";

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.ACCENT,
        tabBarInactiveTintColor: COLORS.TEXT_SECONDARY,
        headerShown: false,
        tabBarBackground: () => (
          <BlurView intensity={20} tint="dark" style={styles.tabBarBlur} />
        ),
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Memories Vault" component={MemoriesVaultScreen} />
      <Tab.Screen name="Echoes" component={EchoesScreen} />
      <Tab.Screen name="1:1" component={OneToOneScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarBlur: {
    flex: 1,
    borderRadius: 24,
    marginHorizontal: 20,
    marginBottom: 16,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  tabBarStyle: {
    backgroundColor: "rgba(26, 26, 36, 0.9)",
    position: "absolute",
    bottom: 16,
    left: 2,
    right: 2,
    borderRadius: 24,
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    fontSize: 12,
    paddingBottom: 4,
    fontWeight: "600",
  },
});
