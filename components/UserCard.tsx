import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface UserCardProps {
  name: string;
  avatar: string; // URL OR local require()
  text?: string
}

export default function UserCard({ name, avatar, text }: UserCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />

      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.chat}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 12,
    marginVertical: 6,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 50,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
  chat:{
    fontSize: 18,
    fontWeight: "400",
    color: "#222",
  }
});
