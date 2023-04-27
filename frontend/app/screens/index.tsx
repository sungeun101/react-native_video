import { View, Text } from "react-native";
import React from "react";
import AuthMenu from "../components/menu";
import AuthDetails from "../components/details";

export default function AuthScreen() {
  return (
    <View className="h-full">
      {/* <AuthMenu /> */}
      <AuthDetails />
    </View>
  );
}
