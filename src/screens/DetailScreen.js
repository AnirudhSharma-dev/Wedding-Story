import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>This is detail Screen</Text>
      <Button title="Click" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
