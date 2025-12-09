import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

interface Props {
  avatar: any; // local require()
  count?: number;
}

export default function ProfileIconWithBadge({ avatar, count = 0 }: Props) {
  return (
    <View style={styles.container}>
      <Image source={avatar} style={styles.avatar} />
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
    right: -4,
    top: -4,
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
  },
});
