import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  // Image,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
  StyleSheet,
  Text,
} from "react-native";
import { Input, Icon } from "react-native-elements";
import MainButton from "../components/MainButton";
import { windowHeight, windowWidth } from "../../utils/Dimensions";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { FirebaseContext } from "../context/FirebaseContext";
import { UserContext } from "../context/UserContext";
import CachedImage from "react-native-expo-cached-image";

const Logo = {
  uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Logo.png",
};

const RegisterScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [confirmPass, setConfirmPass] = useState();
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  const signUp = async () => {
    if (password === confirmPass) {
      setLoading(true);

      const user = { username, email, password, phone };

      try {
        const createdUser = await firebase.createUser(user);

        setUser({ ...createdUser, isLoggedIn: true });
      } catch (error) {
        console.log("Error @signUp: ", error);
      } finally {
        setLoading(false);
      }
    } else {
      return alert("Password do not match");
    }
  };

  return (
    <SafeAreaView style={styles.Screen}>
      <StatusBar style="light" />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          width: windowWidth,
          alignItems: "center",
        }}
        extraHeight={115}
      >
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
              bottom: 20,
            }}
          >
            <View style={styles.ImageConatiner}>
              <CachedImage source={Logo} style={styles.Image} />
            </View>
            <View style={styles.InputFieldContainer}>
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                style={{
                  borderBottomColor: "white",
                  color: "white",
                }}
                placeholder="Full Name"
                placeholderTextColor="white"
                autoFocus
                type="text"
                leftIcon={
                  <Icon
                    type="material-community"
                    name="face-profile"
                    size={24}
                    color="white"
                  />
                }
                value={username}
                onChangeText={(username) => setUsername(username)}
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                style={{
                  borderBottomColor: "white",
                  color: "white",
                }}
                placeholder="E-mail"
                placeholderTextColor="white"
                type="email"
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
                autoCapitalize="none"
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
                value={password}
                onChangeText={(password) => setPassword(password.trim())}
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                style={{
                  borderBottomColor: "white",
                  color: "white",
                }}
                placeholder="Confirm Password"
                placeholderTextColor="white"
                autoCapitalize="none"
                type="password"
                leftIcon={
                  <Icon
                    type="ionicon"
                    name="lock-closed-outline"
                    size={24}
                    color="white"
                  />
                }
                secureTextEntry
                value={confirmPass}
                onChangeText={(confirmPass) =>
                  setConfirmPass(confirmPass.trim())
                }
              />
              <Input
                inputContainerStyle={styles.inputContainerStyle}
                style={{
                  borderBottomColor: "white",
                  color: "white",
                }}
                placeholder="Phone No."
                placeholderTextColor="white"
                type="text"
                leftIcon={
                  <Icon type="feather" name="phone" size={24} color="white" />
                }
                value={phone}
                onChangeText={(phone) => setPhone(phone.trim())}
              />
              <View style={{ ...styles.ButtonContainer, paddingBottom: 5 }}>
                <MainButton onPress={signUp}>
                  {loading ? (
                    <ActivityIndicator size="small" />
                  ) : (
                    <Text>Register</Text>
                  )}
                </MainButton>
              </View>
              <View style={{ ...styles.ButtonContainer, paddingBottom: 5 }}>
                <MainButton onPress={() => navigation.goBack("Login")}>
                  Already have an account?
                </MainButton>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
    maxWidth: 150,
    maxHeight: 150,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: 15,
    position: "absolute",
    top: 5,
  },
  Image: {
    height: 90,
    width: 90,
  },
  InputFieldContainer: {
    marginTop: 25,
    width: windowWidth * 0.9,
    position: "absolute", //Here is the trick
    bottom: windowHeight * 0.27, //Here is the trick
    top: windowHeight * 0.15,
  },
  inputContainerStyle: {
    borderColor: "white",
  },
  ButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
