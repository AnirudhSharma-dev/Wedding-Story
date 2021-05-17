import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorge from "@react-native-async-storage/async-storage";
// Screens //
import OnboardingScreen from "../../src/screens/OnboardingScreen";
import LoginScreen from "../../src/screens/LoginScreen";
import RegisterScreen from "../../src/screens/RegisterScreen";
import AdminScreen from "../../src/screens/AdminScreen";

// Screens //
const Stack = createStackNavigator();
const AuthStack = () => {
  const [isFirstLaunch, setisFirstLaunch] = useState(null);

  let routeName;

  useEffect(() => {
    AsyncStorge.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorge.setItem("alreadyLaunched", "true");
        setisFirstLaunch(true);
      } else {
        setisFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    routeName = "Onboarding";
  } else {
    routeName = "Login";
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{ header: () => null }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
