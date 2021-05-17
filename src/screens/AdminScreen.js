import React, { useContext } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const AdminScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is admin screen</Text>
      <Button title="Logout" onPress={() => navigation.replace("Login")} />
    </View>
  );
};

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
