import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function GroupChatCard() {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.avatarStack}>
          <Image style={styles.avatar} source={require("../assets/avatars/avatar1.jpg")} />
          <Image style={[styles.avatar, styles.avatarOverlap]} source={require("../assets/avatars/avatar2.jpg")} />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>CodeTribe PMB</Text>
          <Text style={styles.message}>Ntombi and Scrum are typing...</Text>
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
    backgroundColor: "#E2F1EB",
    marginTop: 5,
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
