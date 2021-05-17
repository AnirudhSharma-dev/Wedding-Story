import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SangeetScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is sangeet </Text>
    </View>
  );
};

export default SangeetScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
