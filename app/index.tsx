import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import ProfileCard from "../components/ProfileCard";
import ChatListItem from "../components/ChatListItem";
import GroupChatCard from "../components/GroupChatCard";
import ProfileIconWithBadge from "../components/ProfileIconWithBadge";

export default function Index() {
  return (
    <View style={styles.mainView}>

      {/* TOP CARD: Profile Cards Horizontal Scroll */}
      <View style={styles.topCard}>
        <View style={styles.headerRow}>
          <Ionicons name="chevron-back" size={26} color="#000" />
          <Text style={styles.headerTitle}>Chats</Text>
          <ProfileIconWithBadge
            avatar={require("../assets/avatars/avatar3.jpg")}
            count={6}
          />
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.profileScroll}
          contentContainerStyle={{ paddingRight: 20 }}
        >
          <ProfileCard name="Dlozi" avatar={require("../assets/avatars/avatar1.jpg")} />
          <ProfileCard name="Security" avatar={require("../assets/avatars/avatar2.jpg")} />
          <ProfileCard name="Sabelo" avatar={require("../assets/avatars/avatar3.jpg")} />
          <ProfileCard name="Bongeka" avatar={require("../assets/avatars/avatar4.jpg")} />
          <ProfileCard name="Melo" avatar={require("../assets/avatars/avatar5.jpg")} />
          <ProfileCard name="Shantela" avatar={require("../assets/avatars/avatar6.jpg")} />
          <ProfileCard name="Msizi" avatar={require("../assets/avatars/avatar7.jpg")} />
        </ScrollView>
      </View>

      {/* MIDDLE CARD: Recent Chats Scroll */}
      <View style={styles.middleCard}>
        <Text style={styles.sectionTitle}>Recent Chats</Text>
        <ScrollView
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <ChatListItem name="Melo" message="Typing..." avatar={require("../assets/avatars/avatar5.jpg")} unread={6} />
          <ChatListItem name="Shantela" message="Hello there!" avatar={require("../assets/avatars/avatar6.jpg")} unread={2} />
          <ChatListItem name="Msizi" message="Yes, That is how it is done." avatar={require("../assets/avatars/avatar7.jpg")} />
          <ChatListItem name="Ntombi" message="Typing..." avatar={require("../assets/avatars/avatar4.jpg")} unread={2} />
          <ChatListItem name="Mluleki" message="ayyy lutho Khehla.." avatar={require("../assets/avatars/avatar3.jpg")} unread={1} />
          <ChatListItem name="Scrum" message="The scrum meeting will start soon." avatar={require("../assets/avatars/avatar2.jpg")} />
          <ChatListItem name="Dlozi" message="Typing..." avatar={require("../assets/avatars/avatar1.jpg")} unread={2} />
        </ScrollView>
      </View>

      {/* BOTTOM CARD: Sticky Group Chat */}
      <View style={styles.bottomCard}>
        <Text style={styles.sectionTitle}>Group Chat</Text>
        <GroupChatCard />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 18,
    backgroundColor: "#0c0c0cff",
    justifyContent: "space-between", // ensures bottom card sticks
  },
  topCard: {
    backgroundColor: "#E2F1EB",
    padding: 18,
    borderRadius: 35,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  profileScroll: {
    marginTop: 15,
  },
  middleCard: {
    backgroundColor: "#E2F1EB",
    padding: 18,
    borderRadius: 35,
    flex: 1,
    marginBottom: 10,
  },
  bottomCard: {
    backgroundColor: "#E2F1EB",
    padding: 18,
    borderRadius: 35,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 10,
  },
});
