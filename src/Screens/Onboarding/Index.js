import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Image, ImageBackground } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import styles from "./Styles";

const slides = [
  {
    key: "one",
    text: "We believe in revolutionizing the way people shop.",
    title: "Unique Shopping Experience",
    image: require("../../../assets/Cloth1.png"),
    backgroundColor: "#59b2b7",
  },
  {
    key: "two",
    text: "Shop from multiple stores and get the best deals in a single package.",
    title: "Multiple Stores",
    image: require("../../../assets/Cloth2.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    text: "Buy from all the best brands and get the delivery at your doorstep.",
    title: "Get the Deal in a single package",
    image: require("../../../assets/Cloth3.png"),
    backgroundColor: "#22bcb5",
  },
];

const OnBoarding = () => {
  const navigation = useNavigation();

  const _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        {/* <ImageBackground source={item.image} style={styles.background}> */}
        <Image style={styles.image} source={item.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
        {/* </ImageBackground> */}
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
  const _renderDoneButton = () => {
    return (
      <View>
        <Text style={styles.buttonText}>DONE</Text>
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
        renderDoneButton={_renderDoneButton}
        onDone={_onDone}
        renderNextButton={_renderNextButton}
        activeDotStyle={{ backgroundColor: "#54BAB9" }}
        dotStyle={{ backgroundColor: "#9ED2C6" }}
      />
    </>
  );
};

export default OnBoarding;
