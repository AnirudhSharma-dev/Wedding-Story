import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from "react-native";

const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={{ ...styles.button, ...props.style }}>
          <Text style={{ ...styles.buttonText, ...props.style }}>
            {props.children}
          </Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  buttonText: {
    color: "#333333",
    fontSize: 18,
  },
});

export default MainButton;
