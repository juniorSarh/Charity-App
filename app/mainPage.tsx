import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from ".";
 
const MyStack = createNativeStackNavigator({
  screens: {
    Home: {
      screen: Index,
      options: {
        title: 'My home',
        
      },
    },
  },
});

export default MyStack