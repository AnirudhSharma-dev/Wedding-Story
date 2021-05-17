import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BrideScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is bride screen</Text>
    </View>
  );
};

export default BrideScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
