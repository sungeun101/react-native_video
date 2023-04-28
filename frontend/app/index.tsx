import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase";
import { useAppDispatch } from "../redux/hooks";
import { useRouter } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();

  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        console.log("login user", user);
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        "abc@gmail.com",
        "123456"
      );
      // const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("login successful", response);
      router.replace("/home");
    } catch (e) {
      console.log("login unsuccessful", e);
    }
  };

  const handleRegister = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("register successful", response);
    } catch (e) {
      console.log("register unsuccessful", e);
    }
  };

  return (
    <View className="h-full flex flex-col p-3 space-y-3">
      {/* <TouchableOpacity>
        <Feather name="arrow-left" size={24} color="black" />
      </TouchableOpacity> */}

      <TextInput
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
        className="bg-white p-2"
      />

      <TextInput
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        placeholder="Password"
        className="bg-white p-2"
      />

      <TouchableOpacity
        className="mx-10 rounded-lg p-4 bg-gray-200 "
        onPress={handleRegister}
      >
        <Text className="text-center">Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="mx-10 rounded-lg p-4 bg-gray-200 "
        onPress={handleLogin}
      >
        <Text className="text-center">Login</Text>
      </TouchableOpacity>
    </View>
  );
}
