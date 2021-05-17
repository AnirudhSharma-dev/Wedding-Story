import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../src/screens/HomeStackScreen/HomeScreen";
import HaldiScreen from "../../src/screens/HomeStackScreen/HaldiScreen";
import MehendiScreen from "../../src/screens/HomeStackScreen/MehendiScreen";
import SangeetScreen from "../../src/screens/HomeStackScreen/SangeetScreen";
import WeddingScreen from "../../src/screens/HomeStackScreen/WeddingScreen";
import VidaiScreen from "../../src/screens/HomeStackScreen/VidaiScreen";
import DetailScreen from "../../src/screens/DetailScreen";
// import LoadingScreen from "../../src/screens/LoadingScreen";
import NotificationScreen from "../../src/screens/NotificationScreen";
import ProfileScreen from "../../src/screens/ProfileScreen";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import BrideScreen from "../../src/screens/HomeStackScreen/BrideScreen";
import GroomScreen from "../../src/screens/HomeStackScreen/GroomScreen";

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const globalHeaderOptions = {
  headerStyle: { backgroundColor: "#5C0707" },
  headerTintStyle: { color: "white" },
  headerTintColor: "white",
};

const MainStack = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: "#5C0707" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-home" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailStackScreen}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="card-text-outline"
              size={26}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationStackScreen}
        options={{
          tabBarLabel: "Notifications",
          tabBarIcon: ({ color }) => (
            <Ionicons name="notifications-outline" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainStack;

const HomeStackScreen = () => (
  <HomeStack.Navigator screenOptions={globalHeaderOptions}>
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Haldi" component={HaldiScreen} />
    <HomeStack.Screen name="Mehendi" component={MehendiScreen} />
    <HomeStack.Screen name="Sangeet" component={SangeetScreen} />
    <HomeStack.Screen name="Wedding" component={WeddingScreen} />
    <HomeStack.Screen name="Vidai" component={VidaiScreen} />
    <HomeStack.Screen name="Groom" component={GroomScreen} />
    <HomeStack.Screen name="Bride" component={BrideScreen} />
  </HomeStack.Navigator>
);

const DetailStackScreen = () => (
  <DetailStack.Navigator screenOptions={globalHeaderOptions}>
    <DetailStack.Screen name="Detail" component={DetailScreen} />
  </DetailStack.Navigator>
);

const NotificationStackScreen = () => (
  <NotificationStack.Navigator screenOptions={globalHeaderOptions}>
    <NotificationStack.Screen
      name="Notifications"
      component={NotificationScreen}
    />
  </NotificationStack.Navigator>
);

const ProfileStackScreen = () => (
  <ProfileStack.Navigator screenOptions={globalHeaderOptions}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
);
