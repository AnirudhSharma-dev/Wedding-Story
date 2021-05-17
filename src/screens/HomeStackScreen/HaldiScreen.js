import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import CachedImage from "react-native-expo-cached-image";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";

const HaldiScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <CachedImage
        source={{
          uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Background.png",
        }}
        style={styles.isBackground}
      />
    </SafeAreaView>
  );
};

export default HaldiScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  isBackground: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    resizeMode: "contain",
    backgroundColor: "#ff6500",
  },
});
