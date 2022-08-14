import { Text, View, FlatList, ImageBackground } from "react-native";
import React, { useState } from "react";
import {
  Appbar,
  Card,
  Surface,
  Avatar,
  Button,
  Divider,
} from "react-native-paper";
import styles from "./Styles";

const BrandSelection = ({ navigation }) => {
  const [data, setData] = useState([
    {
      title: "J Dot",
      Logo: require("../../../assets/Logo1.png"),
      background: "#ed1b24",
    },
    {
      title: "Nishat Linen",
      Logo: require("../../../assets/Logo2.png"),
      background: "#E7B635",
    },
    {
      title: "Alkaram Studios",
      Logo: require("../../../assets/Logo3.png"),
      background: "#54BAB9",
    },
    {
      title: "Beach Tree",
      Logo: require("../../../assets/Logo4.png"),
      background: "#ffffff",
    },
    {
      title: "Sapphire",
      Logo: require("../../../assets/Logo5.png"),
      background: "#4A855F",
    },
    {
      title: "Bonanza Satrangi",
      Logo: require("../../../assets/Logo6.png"),
      background: "#000000",
    },
    {
      title: "Sana Safinaz",
      Logo: require("../../../assets/Logo7.png"),
      background: "#9C1714",
    },
    {
      title: "J Dot",
      Logo: require("../../../assets/Logo1.png"),
      background: "#ed1b24",
    },
    {
      title: "Nishat Linen",
      Logo: require("../../../assets/Logo2.png"),
      background: "#E7B635",
    },
    {
      title: "Alkaram Studios",
      Logo: require("../../../assets/Logo3.png"),
      background: "#54BAB9",
    },
    {
      title: "Beach Tree",
      Logo: require("../../../assets/Logo4.png"),
      background: "#ffffff",
    },
    {
      title: "Sapphire",
      Logo: require("../../../assets/Logo5.png"),
      background: "#4A855F",
    },
    {
      title: "Bonanza Satrangi",
      Logo: require("../../../assets/Logo6.png"),
      background: "#000000",
    },
    {
      title: "Sana Safinaz",
      Logo: require("../../../assets/Logo7.png"),
      background: "#9C1714",
    },
  ]);
  return (
    <View style={{ flex: 1, backgroundColor: "silver" }}>
      <Appbar.Header>
        <Appbar.BackAction color="white" onPress={() => {}} />
        <Appbar.Content color="white" title="Brand List" />
      </Appbar.Header>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Surface
            style={[styles.surface, { backgroundColor: item.background }]}
            elevation={4}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Avatar.Image source={item.Logo} />
          </Surface>
        )}
      />
    </View>
  );
};
export default BrandSelection;
