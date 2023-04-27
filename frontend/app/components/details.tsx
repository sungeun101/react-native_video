import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";

export default function AuthDetails() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("res", response);
    } catch {}
  };

  const handleRegister = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("login successful", response);
    } catch (e) {
      console.log("login unsuccessful", e);
    }
  };

  return (
    <View className="h-full flex flex-col p-3">
      <TouchableOpacity>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity>

      <TextInput onChangeText={(text) => setEmail(text)} placeholder="Email" />

      <TextInput
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Password"
      />

      <TouchableOpacity
        className="p-4 bg-gray-200 border-gray-300"
        onPress={handleRegister}
      >
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
