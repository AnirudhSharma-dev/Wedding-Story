import { StatusBar } from "expo-status-bar";
import React, { useContext, useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { UserContext } from "../../context/UserContext";
import { FirebaseContext } from "../../context/FirebaseContext";
import { windowWidth, windowHeight } from "../../../utils/Dimensions";
import { Avatar } from "react-native-elements";
import CachedImage from "react-native-expo-cached-image";

const HomeScreen = ({ navigation }) => {
  const backgroundimage = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/pattern.png",
  };
  const Groom = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Groom.png",
  };
  const GroomTitle = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/GroomTitle-2.png",
  };
  const Bride = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Bride.png",
  };
  const BrideTitle = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/BrideTitle.png",
  };
  const Haldi = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Haldi.png",
  };
  const Mehendi = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Mehendi.png",
  };
  const Sangeet = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Sangeet.png",
  };
  const Wedding = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Wedding.png",
  };
  const Vidai = {
    uri: "https://eventworldlive.in/wp-content/uploads/2021/05/Vidai.png",
  };
  const firebase = useContext(FirebaseContext);
  const [_, setUser] = useContext(UserContext);

  const logOut = async () => {
    const loggedOut = await firebase.logOut();
    if (loggedOut) {
      setUser((state) => ({ ...state, isLoggedIn: false }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Home",
      headerStyle: {
        backgroundColor: "#5C0707",
      },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerRight: () => (
        <View style={{ marginRight: 7 }}>
          <TouchableOpacity activeOpacity={0.5} onPress={logOut}>
            <Avatar
              rounded
              size="medium"
              icon={{ name: "logout", type: "antdesign" }}
              // source={{
              //   uri: "https://icon-library.net/images/avatar-icon-images/avatar-icon-images-4.jpg",
              // }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.backgroundImage}>
        <CachedImage
          isBackground
          source={backgroundimage}
          style={styles.Pattern}
        >
          <View style={styles.BrideGroomAvatarContainer}>
            <View style={styles.AvatarContainer}>
              <Avatar
                rounded
                size="large"
                source={Groom}
                containerStyle={{
                  backgroundColor: "grey",
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Groom")}
                renderPlaceholderContent={
                  <ActivityIndicator size="small" color="white" />
                }
              />
              <CachedImage source={GroomTitle} style={styles.Title} />
            </View>
            <View style={styles.AvatarContainer}>
              <Avatar
                rounded
                size="large"
                // icon={{ name: "user", type: "font-awesome" }}
                source={Bride}
                containerStyle={{
                  backgroundColor: "grey",
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Bride")}
                renderPlaceholderContent={
                  <ActivityIndicator size="small" color="white" />
                }
              />
              <CachedImage source={BrideTitle} style={styles.Title} />
            </View>
          </View>
        </CachedImage>
      </View>

      {/* Second half */}

      <View style={styles.Itenary}>
        <View style={styles.FirstSec}>
          <Text style={styles.FirstSecText}>Wedding Itenary</Text>
        </View>

        {/* {Second Half sec} */}

        <View style={styles.SecondSec}>
          {/* {First Line of events} */}
          <View style={styles.SecondSecContainer}>
            <View style={styles.EventContainer}>
              <Avatar
                rounded
                size="large"
                // icon={{ name: "user", type: "font-awesome" }}
                source={Haldi}
                containerStyle={{
                  backgroundColor: "grey",
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Haldi")}
                renderPlaceholderContent={
                  <ActivityIndicator size="small" color="white" />
                }
              />
              <Text style={styles.EventHeads}>Haldi</Text>
            </View>
            <View style={styles.EventContainer}>
              <Avatar
                rounded
                size="large"
                // icon={{ name: "user", type: "font-awesome" }}
                source={Mehendi}
                containerStyle={{
                  backgroundColor: "grey",
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Mehendi")}
                renderPlaceholderContent={
                  <ActivityIndicator size="small" color="white" />
                }
              />
              <Text style={styles.EventHeads}>Mehendi</Text>
            </View>
            <View style={styles.EventContainer}>
              <Avatar
                rounded
                size="large"
                // icon={{ name: "user", type: "font-awesome" }}
                source={Sangeet}
                containerStyle={{
                  backgroundColor: "grey",
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Sangeet")}
                renderPlaceholderContent={
                  <ActivityIndicator size="small" color="white" />
                }
              />
              <Text style={styles.EventHeads}>Sangeet</Text>
            </View>
          </View>
          {/* {///////////////////////////////////////////////////} */}
          {/* {Second Line of events} */}
          <View style={styles.SecondSecContainer}>
            <View style={styles.EventContainer}>
              <Avatar
                rounded
                size="large"
                // icon={{ name: "user", type: "font-awesome" }}
                source={Wedding}
                containerStyle={{
                  backgroundColor: "grey",
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Wedding")}
                renderPlaceholderContent={
                  <ActivityIndicator size="small" color="white" />
                }
              />
              <Text style={styles.EventHeads}>Wedding</Text>
            </View>
            <View style={styles.EventContainer}>
              <Avatar
                rounded
                size="large"
                // icon={{ name: "user", type: "font-awesome" }}
                source={Vidai}
                containerStyle={{
                  backgroundColor: "grey",
                }}
                activeOpacity={0.7}
                onPress={() => navigation.navigate("Vidai")}
                renderPlaceholderContent={
                  <ActivityIndicator size="small" color="white" />
                }
              />
              <Text style={styles.EventHeads}>Vidai</Text>
            </View>
          </View>
          {/* {///////////////////////////////////////////////////} */}
        </View>
        {/* {///////////////////////////////////////////////////} */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#3d0500",
  },
  backgroundImage: {
    width: windowWidth,
    alignItems: "center",
    height: windowHeight * 0.2,
    top: 0,
    marginBottom: 15,
  },
  Pattern: {
    width: windowWidth,
    height: windowHeight * 0.28,
    alignItems: "center",
  },
  BrideGroomAvatarContainer: {
    // backgroundColor: "white",
    top: 5,
    flexDirection: "row",
    justifyContent: "space-around",
    width: windowWidth * 0.95,
    marginTop: 5,
    padding: 5,
  },
  // BrideGroomLabelContainer: {
  //   // backgroundColor: "green",
  //   marginTop: 5,
  //   marginBottom: 10,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   width: windowWidth * 0.95,
  // },
  AvatarContainer: {
    justifyContent: "space-evenly",
    // backgroundColor: "green",
    alignItems: "center",
    padding: 5,
  },
  Title: {
    width: 120,
    height: 50,
    marginTop: 5,
    // backgroundColor: "yellow",
  },

  Itenary: {
    marginTop: windowHeight * 0.05,
    flex: 2,
    width: windowWidth,
    // backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  FirstSec: {
    alignItems: "center",
    // backgroundColor: "blue",
    marginTop: 10,
    marginBottom: 10,
    width: "95%",
  },
  FirstSecText: { fontSize: 24, fontWeight: "500", color: "white" },
  SecondSec: {
    // backgroundColor: "red",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  SecondSecContainer: {
    width: windowWidth * 0.95,
    flexDirection: "row",
    justifyContent: "space-evenly",
    // backgroundColor: "cyan",
    padding: 5,
  },
  EventContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "pink",
    padding: 5,
  },
  EventHeads: {
    color: "white",
    fontWeight: "400",
    fontSize: 17,
    marginTop: 5,
  },
});
