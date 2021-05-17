import React from "react";
import { StyleSheet, Text, View } from "react-native";

const VidaiScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is Vidai</Text>
    </View>
  );
};

export default VidaiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
