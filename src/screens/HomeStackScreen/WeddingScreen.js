import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WeddingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is WeddingScreen</Text>
    </View>
  );
};

export default WeddingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
