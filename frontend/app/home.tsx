import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { useRouter } from "expo-router";

export default function home() {
  const router = useRouter();

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        router.replace("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <View>
      <TouchableOpacity
        className="p-4 bg-gray-200 border-gray-300"
        onPress={handleLogout}
      >
        <Text>Logout</Text>
      </TouchableOpacity>

      <Text>{auth?.currentUser?.email}</Text>

      <TouchableOpacity
        className="p-4 bg-gray-200 border-gray-300"
        onPress={() => router.push("/record")}
      >
        <Text>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
}
