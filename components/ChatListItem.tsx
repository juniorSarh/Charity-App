// components/ChatListItem.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
  name: string;
  message: string;
  avatar: string;
  time?: string;
  unread?: number;
  color?: string;
}

export default function ChatListItem({
  name,
  message,
  avatar,
  time = "11:34",
  unread = 0,
  color = "#22c55e",
}: Props) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: avatar }} style={[styles.avatar, { backgroundColor: color }]} />

      <View style={styles.center}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{message}</Text>
      </View>

      <View style={styles.right}>
        <Text style={styles.time}>{time}</Text>
        {unread > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{unread}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  center: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
  },
  message: {
    color: "#555",
    marginTop: 2,
  },
  right: {
    alignItems: "flex-end",
  },
  time: {
    color: "#555",
    fontSize: 13,
  },
  badge: {
    marginTop: 6,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#e5f044",
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    fontWeight: "700",
  },
});
