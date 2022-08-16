import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./Styles";

const slides = [
  {
    key: "one",
    text: "We believe in revolutionizing the way people shop.",
    image: require("../../../assets/background7.jpg"),
    backgroundColor: "#59b2b7",
  },
  {
    key: "two",
    text: "Shop from multiple stores and get the best deals in a single package.",
    image: require("../../../assets/background8.jpg"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    text: "Buy from all the best brands and get the delivery at your doorstep.",
    image: require("../../../assets/background11.jpg"),
    backgroundColor: "#22bcb5",
  },
];

const OnBoarding = () => {
  const navigation = useNavigation();

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <ImageBackground source={item.image} style={styles.background}>
          {/* <Image source={item.image} /> */}
          <Text style={styles.text}>{item.text}</Text>
        </ImageBackground>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View>
        <Text style={styles.buttonText}>NEXT</Text>
      </View>
    );
  };

  const _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true });
    navigation.navigate("SignIn");
  };
  return (
    <>
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        onDone={_onDone}
        renderNextButton={_renderNextButton}
        activeDotStyle={{ backgroundColor: "#54BAB9" }}
        dotStyle={{ backgroundColor: "#9ED2C6" }}
      />
    </>
  );
};

export default OnBoarding;
