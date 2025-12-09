import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface ProfileCardProps {
  name: string;
  avatar: string; // URL or local require()
  online?: boolean;
}

export default function ProfileCard({ name, avatar, online = true }: ProfileCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.avatarContainer}>
        <Image
          source={typeof avatar === "string" ? { uri: avatar } : avatar}
          style={styles.avatar}
        />

        {online && <View style={styles.statusDot} />}
      </View>

      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    padding: 15,
    width: 200,
    backgroundColor:"#ffffff",
    borderRadius:15,
    flex:0.2
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 40,
  },
  statusDot: {
    position: "absolute",
    right: -15,
    top: -10,
    width: 18,
    height: 18,
    borderRadius: 10,
    backgroundColor: "#22c55e", // green
    borderWidth: 3,
    borderColor: "#ffffff", // white border separation
  },
  name: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#111010ff",
    textAlign: "center",
  },
});
