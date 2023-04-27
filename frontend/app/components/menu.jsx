import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

export default function AuthMenu() {
  return (
    <View className="h-full flex flex-col justify-between">
      <View className="p-3">
        <Text className="text-center font-bold text-lg mb-3">
          Login(AuthMenu)
        </Text>
        <TouchableOpacity className="border border-gray-300 flex flex-row justify-between items-center p-3">
          <Feather name="user" size={24} color="black" />
          <Text>Use Email</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity className="p-4 bg-gray-200 border-t border-gray-300">
          <Text className="text-center">
            Don't have an account? <Text className="font-bold">Sign Up</Text>
          </Text>
          <Text className="text-center">
            Already have an account? <Text className="font-bold">Sign In</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
