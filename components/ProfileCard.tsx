// components/ProfileCard.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface Props {
  name: string;
  avatar: string;
  online?: boolean;
}

export default function ProfileCard({ name, avatar, online = true }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image source={{ uri: avatar }} style={styles.avatar} />

        {online && <View style={styles.statusDot} />}
      </View>

      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    width: 70,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  statusDot: {
    position: "absolute",
    right: 2,
    top: 2,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: "#4ade80",
    borderWidth: 3,
    borderColor: "#fff",
  },
  name: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
  },
});
