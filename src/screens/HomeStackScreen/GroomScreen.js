import React from "react";
import { StyleSheet, Text, View } from "react-native";

const GroomScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is groom screen </Text>
    </View>
  );
};

export default GroomScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
