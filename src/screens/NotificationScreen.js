import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is Notifications</Text>
      <Button title="Click" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
