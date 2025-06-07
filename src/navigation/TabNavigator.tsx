import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import { HomeScreen } from "../screens/HomeScreen";
import { MemoriesVaultScreen } from "../screens/MemoriesVaultScreen";
import { EchoesScreen } from "../screens/EchoesScreen";
import { OneToOneScreen } from "../screens/OneToOneScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName = "help-circle";
          if (route.name === "Home") iconName = "home";
          else if (route.name === "Memories Vault") iconName = "users";
          else if (route.name === "Echoes") iconName = "globe";
          else if (route.name === "1:1") iconName = "message-circle";

          return (
            <View style={styles.iconWrapper}>
              {/* Icon */}
              <Feather
                name={iconName}
                size={size}
                color="#FFFFFF"
                style={styles.icon}
              />

              {/* Active indicator dot */}
              {focused && (
                <View style={styles.activeDot} />
              )}
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
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
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    position: "relative",
    width: 60,
    height: 50,
  },
  activeDot: {
    position: "absolute",
    bottom: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFFFFF",
   
  },
  icon: {
    zIndex: 1,
  },
  tabBarStyle: {
    backgroundColor: "#000000",
    position: "absolute",
    bottom: 0,
    left: 16,
    right: 16,
    borderRadius: 28,
    height: 80,
    width: "100%",
    paddingBottom: 20,
    paddingTop: 10,
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 12,
    borderTopWidth: 0,
  },
  blurContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 28,
    overflow: "hidden",
  },
});
