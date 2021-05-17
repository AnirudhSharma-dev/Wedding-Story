import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { UserContext } from "../context/UserContext";
import { FirebaseContext } from "../context/FirebaseContext";

const ProfileScreen = ({ navigation }) => {
  const [user, setUser] = useContext(UserContext);
  const firebase = useContext(FirebaseContext);
  const logOut = async () => {
    const loggedOut = await firebase.logOut();
    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };
  return (
    <View style={styles.container}>
      <Text>This is Profile screen</Text>
      <Text style={styles.TextUsername}>{user.username}</Text>
      <Text style={styles.TextUsername}>{user.email}</Text>
      <Text style={styles.TextUsername}>{user.phone}</Text>
      <Text style={styles.TextUsername}>{user.uid}</Text>
      <Button title="Click" onPress={() => navigation.navigate("Home")} />
      <Button title="Click to logout" onPress={logOut} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextUsername: {
    fontSize: 16,
    fontWeight: "600",
    marginTop: 16,
    marginRight: 0,
    marginBottom: 32,
    marginLeft: 0,
  },
});
