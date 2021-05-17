import React from "react";
import { Button, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

// Skip Button //
const Skip = ({ ...props }) => <Button title="Skip" color="#fff" {...props} />;
//Next Button //
const Next = ({ ...props }) => <Button title="Next" color="#fff" {...props} />;
//Done Button //
const Done = ({ ...props }) => <Button title="Done" color="#fff" {...props} />;

const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      DoneButtonComponent={Done}
      onSkip={() => navigation.navigate("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#5C0707",
          image: (
            <Image
              source={require("../../assets/Logo.png")}
              style={{ height: 250, width: 250 }}
            />
          ),
          title: "Wedding Story",
          subtitle: "Digital itenary in your hands",
        },
        {
          backgroundColor: "#5C0707",
          image: (
            <Image
              source={require("../../assets/Logo.png")}
              style={{ height: 250, width: 250 }}
            />
          ),
          title: "Notifications",
          subtitle: "Get reminders for the upcomming ceremony",
        },
        {
          backgroundColor: "#5C0707",
          image: (
            <Image
              source={require("../../assets/Logo.png")}
              style={{ height: 250, width: 250 }}
            />
          ),
          title: "HelpDesk",
          subtitle: "Stuck ?, ask for help !",
        },
      ]}
    />
  );
};

export default OnboardingScreen;
