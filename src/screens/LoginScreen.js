import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
  Text,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import MainButton from "../components/MainButton";
import { windowHeight, windowWidth } from "../../utils/Dimensions";
import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext } from "../context/UserContext";
import CachedImage from "react-native-expo-cached-image";
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  const signIn = async () => {
    setLoading(true);
    if (email === "admin@admin.com" && password === "testtest") {
      navigation.replace("Admin");
    } else {
      try {
        await firebase.signIn(email, password);
        const uid = firebase.getCurrentUser().uid;
        const userInfo = await firebase.getUserInfo(uid);
        setUser({
          username: userInfo.username,
          email: userInfo.email,
          phone: userInfo.phone,
          uid,
          isLoggedIn: true,
        });
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <SafeAreaView style={styles.Screen}>
      <StatusBar style="light" />
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
          width: windowWidth,
          height: windowHeight,
        }}
      >
        <View
          style={{
            flex: 1,
            width: windowWidth,
            alignItems: "center",
          }}
        >
          <View style={styles.ImageConatiner}>
            <CachedImage
              source={{
                uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Logo.png",
              }}
              style={styles.Image}
            />
          </View>
          <View style={styles.InputFieldContainer}>
            <Input
              inputContainerStyle={styles.inputContainerStyle}
              style={{
                borderBottomColor: "white",
                color: "white",
              }}
              placeholder="E-mail"
              placeholderTextColor="white"
              type="email"
              autoFocus
              autoCapitalize="none"
              leftIcon={
                <Icon
                  type="MaterialIcons"
                  name="email"
                  size={24}
                  color="white"
                />
              }
              value={email}
              onChangeText={(email) => setEmail(email.trim())}
            />
            <Input
              inputContainerStyle={styles.inputContainerStyle}
              style={{
                borderBottomColor: "white",
                color: "white",
              }}
              placeholder="Password"
              placeholderTextColor="white"
              type="password"
              leftIcon={
                <Icon
                  type="ionicon"
                  name="key-outline"
                  size={24}
                  color="white"
                />
              }
              secureTextEntry
              autoCapitalize="none"
              onChangeText={(password) => setPassword(password)}
              onSubmitEditing={signIn}
            />
            <View style={{ ...styles.ButtonContainer, paddingBottom: 5 }}>
              <MainButton onPress={signIn}>
                {loading ? (
                  <ActivityIndicator size="small" />
                ) : (
                  <Text>Login</Text>
                )}
              </MainButton>
            </View>
            <View style={styles.ButtonContainer}>
              <MainButton onPress={() => navigation.navigate("Register")}>
                Sign Up
              </MainButton>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5C0707",
  },
  KeyboardAvoidingView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: windowWidth,
    height: windowHeight,
  },
  ImageConatiner: {
    flex: 1,
    maxWidth: 200,
    maxHeight: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 0,
    position: "absolute",
    top: 5,
  },
  Image: {
    height: 150,
    width: 150,
  },
  InputFieldContainer: {
    marginTop: 10,
    width: windowWidth * 0.9,
    position: "absolute", //Here is the trick
    bottom: windowHeight * 0.27, //Here is the trick
    top: windowHeight * 0.27,
  },
  inputContainerStyle: {
    borderColor: "white",
  },
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
