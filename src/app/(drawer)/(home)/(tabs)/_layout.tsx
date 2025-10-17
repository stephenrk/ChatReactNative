import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import { Platform } from "react-native";

export default function TabsLayout() {
  const isGlass = Platform.OS === "ios";

  if (isGlass) {
    return (
      <NativeTabs>
      <NativeTabs.Trigger name="chats">
        <Label>Chats</Label>
        <Icon sf="message" drawable="custom_home_drawable" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="settings">
        <Icon sf="gear" drawable="custom_settings_drawable" />
        <Label>Settings</Label>
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="search" role="search">
        <Label>Search</Label>
      </NativeTabs.Trigger>
    </NativeTabs>
    )
  }

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="chats" options={{ title: "Chats", tabBarIcon: ({ color, size }) => <Ionicons name="chatbox-ellipses-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="settings" options={{ title: "Settings", tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} /> }} />
      <Tabs.Screen name="search" options={{ title: "Search", tabBarIcon: ({ color, size }) => <Ionicons name="search-outline" color={color} size={size} /> }} />
    </Tabs>
  );
}
