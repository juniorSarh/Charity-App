// components/GroupChatCard.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function GroupChatCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatarStack}>
          <Image
            style={styles.avatar}
            source={{ uri: "https://randomuser.me/api/portraits/men/15.jpg" }}
          />
          <Image
            style={[styles.avatar, styles.avatarOverlap]}
            source={{ uri: "https://randomuser.me/api/portraits/women/11.jpg" }}
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.name}>Kevin’s BP</Text>
          <Text style={styles.message}>Kate and Ann are typing...</Text>
        </View>

        <Text style={styles.time}>12:32</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    borderRadius: 25,
    backgroundColor: "#fff",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarStack: {
    flexDirection: "row",
    marginRight: 10,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  avatarOverlap: {
    marginLeft: -15,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
  },
  message: {
    color: "#555",
    marginTop: 2,
  },
  time: {
    color: "#555",
    fontSize: 13,
  },
});
