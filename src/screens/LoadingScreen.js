import React, { useContext, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View, Image } from "react-native";
// import LottieView from "lottie-react-native";
import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";
import CachedImage from "react-native-expo-cached-image";

const LoadingScreen = () => {
  const [_, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    setTimeout(async () => {
      const user = firebase.getCurrentUser();

      if (user) {
        const userInfo = await firebase.getUserInfo(user.uid);

        setUser({
          isLoggedIn: true,
          email: userInfo.email,
          uid: user.uid,
          username: userInfo.username,
          phone: userInfo.phone,
        });
      } else {
        setUser((state) => ({ ...state, isLoggedIn: false }));
      }
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <CachedImage
        source={{
          uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Logo.png",
        }}
        style={{ height: 250, width: 250, marginBottom: 20 }}
      />
      <ActivityIndicator size="small" />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5C0707",
  },
});
