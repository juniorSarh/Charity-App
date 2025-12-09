// screens/Index.tsx
import { StyleSheet, Text, View } from "react-native";
import ProfileCard from "@/components/ProfileCard";
import ChatListItem from "@/components/ChatListItem";
import GroupChatCard from "@/components/GroupChatCard";
import { Ionicons } from "@expo/vector-icons";
import ProfileIconWithBadge from "@/components/ProfileIconWithBadge";

export default function Index() {
  return (
    <View style={styles.mainView}>
      {/* TOP SECTION */}
      <View style={styles.topCard}>
        <View style={styles.headerRow}>
          <Ionicons name="chevron-back" size={24} />
          <Text style={styles.headerTitle}>Chats</Text>
         <ProfileIconWithBadge 
            avatar="https://randomuser.me/api/portraits/men/14.jpg"
            count={6}
          />

        </View>

        <View style={styles.profileRow}>
          <ProfileCard
            name="Mira"
            avatar="https://randomuser.me/api/portraits/women/21.jpg"
          />
          <ProfileCard
            name="Phill"
            avatar="https://randomuser.me/api/portraits/men/24.jpg"
          />
          <ProfileCard
            name="Mike"
            avatar="https://randomuser.me/api/portraits/men/25.jpg"
          />
          <ProfileCard
            name="Kierra"
            avatar="https://randomuser.me/api/portraits/women/23.jpg"
          />
          
        </View>
      </View>

      {/* RECENT CHATS */}
      <View style={styles.middleCard}>
        <Text style={styles.sectionTitle}>Recent Chat</Text>

        <ChatListItem
          name="Phillip Geidt"
          message="Phillip is typing..."
          avatar="https://randomuser.me/api/portraits/men/44.jpg"
          unread={6}
        />

        <ChatListItem
          name="Kierra from Match"
          message="Voice message"
          avatar="https://randomuser.me/api/portraits/women/33.jpg"
          unread={2}
        />

        <ChatListItem
          name="Mike Smith"
          message="Yes, put my name down..."
          avatar="https://randomuser.me/api/portraits/men/28.jpg"
        />

        <ChatListItem
          name="Stacey Neighbor"
          message="Hi! Her mom already used it"
          avatar="https://randomuser.me/api/portraits/women/29.jpg"
        />
         <ChatListItem
          name="Mike Smith"
          message="Yes, put my name down..."
          avatar="https://randomuser.me/api/portraits/men/28.jpg"
        />

        <ChatListItem
          name="Stacey Neighbor"
          message="Hi! Her mom already used it"
          avatar="https://randomuser.me/api/portraits/women/29.jpg"
          unread={3}
        />

      </View>

      {/* GROUP CHAT */}
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
    backgroundColor: "black",
  
  },

  topCard: {
    backgroundColor: "#E2F1EB",
    borderRadius: 35,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    margin: 5,
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

  profileRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  middleCard: {
    backgroundColor: "#E2F1EB",
    borderRadius: 35,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 5,
    flex: 1,
  },

  bottomCard: {
    backgroundColor: "#E2F1EB",
    borderRadius: 35,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 10,
  },
});
