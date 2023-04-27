import { View } from "react-native";
import AuthScreen from "./screens";
import { auth, onAuthStateChanged } from "./firebase";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./redux/hooks";
import { login, logout, selectUser } from "./redux/slices/user";

const Home = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <View>
      <AuthScreen />
    </View>
  );
};

export default Home;
