// components/ProfileIconWithBadge.tsx
import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface Props {
  avatar: string;
  count?: number;
}

export default function ProfileIconWithBadge({ avatar, count = 0 }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />

      {count > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{count}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 20,
  },
  badge: {
    position: "absolute",
    right: -2,
    top: -2,
    backgroundColor: "#e5f044",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#000",
  },
});
