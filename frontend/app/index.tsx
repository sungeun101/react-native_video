import { View, Text } from "react-native";
import { initializeApp } from "firebase/app";
import Constants from "expo-constants";
import AuthScreen from "./screens/auth";

// Initialize Firebase
const app = initializeApp(Constants.manifest.web.config.firebase);

const Home = () => {
  return (
    <View className="flex">
      <Text className="font-bold">cf replay</Text>
      <AuthScreen />
    </View>
  );
};

export default Home;
