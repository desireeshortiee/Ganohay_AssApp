import React from "react";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: true, // Ensure the header is shown
        headerTitle: route.name === "index" ? "Home" : route.name.charAt(0).toUpperCase() + route.name.slice(1), // Dynamically set header title
        tabBarStyle: {
          backgroundColor: "pink",
          margin: 0,
          padding: 5,
          minHeight: 60,
          paddingBottom: 8,
          borderTopWidth: 1,
          borderTopColor: "#db0000",
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
        },
        tabBarActiveTintColor: "#cd5e77",
        tabBarInactiveTintColor: "#ffffff",
      })}
      initialRouteName="index"
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"} // Use "home" in lowercase
                color={focused ? "#cd5e77" : "#ffffff"}
                size={24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "account" : "account-outline"}
                color={focused ? "#cd5e77" : "#ffffff"}
                size={24}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialCommunityIcons
                name={focused ? "cog" : "cog-outline"}
                color={focused ? "#cd5e77" : "#ffffff"}
                size={24}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
