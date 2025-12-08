import { Text, View } from "react-native";
import { StyleSheet } from "react-native";




export default function Index() {
  return (
    <View style={styles.mainView}>   
    <View style={styles.chatView}>
      <Text>Chats.</Text>
    </View>
    <View
      style={styles.recentChats} 
    >
      <Text>Recent chats.</Text>
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
    padding: 2,
    backgroundColor: "#0a0a0aff",
  },
  chatView: {
    marginTop: 5,
    padding: 20,
    backgroundColor: "#727259ff",
    height: 200,
    borderRadius: 15,
  },
  recentChats: {
    marginTop: 2,
    padding: 20,
    backgroundColor: "#5a9bd4ff",
    height: 500,
    borderRadius: 15,
  },
  groupChats: {
    marginTop: 2,
    padding: 20,
    backgroundColor: "#d0d0d0ff",
    height: 150,
    borderRadius: 15,
  },
})