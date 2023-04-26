import { View, Text } from "react-native";
import firebase from "firebase/app";
import Constants from "expo-constants";

if (firebase.getApps.length == 0) {
  firebase.initializeApp(Constants.manifest.web.config.firebase);
}

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};

export default Home;
