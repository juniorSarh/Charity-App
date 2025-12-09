import { StyleSheet, Text, View } from "react-native";
import UserCard from "@/components/UserCard";
import ProfileCard from "@/components/ProfileCard";



export default function Index() {
  return (
    <View style={styles.mainView}>   
        <View style={styles.chatView}>
          <Text>Chats.</Text>
          <Text>Chats.</Text>
          <View style={styles.cardRow}>
          <ProfileCard
        name="John Doe"
        avatar="https://randomuser.me/api/portraits/men/22.jpg"
        online={true}
      />

      <ProfileCard
        name="Sarah"
        avatar="https://randomuser.me/api/portraits/women/10.jpg"
        online={true}
      />
        <ProfileCard
        name="John Doe"
        avatar="https://randomuser.me/api/portraits/men/22.jpg"
        online={true}
      />
{/* 
      <ProfileCard
        name="Sarah"
        avatar="https://randomuser.me/api/portraits/women/10.jpg"
        online={true}
      /> */}
    

      </View>
        </View>
        <View
          style={styles.recentChats} 
        >
          <Text>Recent chats.</Text>
           <UserCard
        name="John Doe"
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
        text="That is great see you soon....."
      />

      <UserCard
        name="Sarah James"
        avatar="https://randomuser.me/api/portraits/women/10.jpg"
      />
       <UserCard
        name="John Doe"
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
      />

      <UserCard
        name="Sarah James"
        avatar="https://randomuser.me/api/portraits/women/10.jpg"
      />
       <UserCard
        name="John Doe"
        avatar="https://randomuser.me/api/portraits/men/32.jpg"
      />

      
        </View>
          <View style={styles.groupChats}>
          <Text>Group Chats.</Text>
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
   
    backgroundColor: "#d31a1aff",
  },
  chatView: {
    backgroundColor: "#727259ff",
    flex:0.2,
    borderRadius: 15,
    padding:5,
    marginTop:2,
    flexDirection:'column'
  },
  recentChats: {
    
    backgroundColor: "#5a9bd4ff",
    flex:0.6,
    padding:2,
  marginTop:2,
    borderRadius: 15,
  },
  groupChats: {
    backgroundColor: "#d0d0d0ff",
  flex:0.2,
  padding:2,
  marginTop:2,
    borderRadius: 15,
  },
    cardRow: {
    flexDirection: "row",      // ⬅️ makes cards go left → right
    flexWrap: "wrap",          // ⬅️ allows the cards to wrap to new lines
    gap: 20,                   // spacing between cards
    padding: 20,
  },
})