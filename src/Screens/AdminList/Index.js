import { Text, View, FlatList } from "react-native";
import React, { useState } from "react";
import {
  Appbar,
  Card,
  Surface,
  Avatar,
  Button,
  Divider,
  IconButton,
  Checkbox,
} from "react-native-paper";

const AdminList = ({ navigation }) => {
  const [data, setData] = useState([
    {
      title: "J Dot",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo1.png"),
      background: "#ed1b24",
      price: 1199,
      shirt: require("../../../assets/shirt1.png"),
      id: "0",
      check: false,
    },
    {
      title: "Nishat Linen",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo2.png"),
      background: "#E7B635",
      price: 699,
      shirt: require("../../../assets/shirt2.png"),
      id: "1",
      check: false,
    },
    {
      title: "Alkaram Studios",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo3.png"),
      background: "#54BAB9",
      price: 799,
      shirt: require("../../../assets/shirt8.png"),
      id: "2",
      check: false,
    },
    {
      title: "Beach Tree",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo4.png"),
      background: "#ffffff",
      price: 799,
      shirt: require("../../../assets/shirt4.png"),
      id: "3",
      check: false,
    },
    {
      title: "Sapphire",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo5.png"),
      background: "#4A855F",
      price: 1299,
      shirt: require("../../../assets/shirt5.png"),
      id: "4",
      check: false,
    },
    {
      title: "Bonanza Satrangi",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo6.png"),
      background: "#000000",
      price: 1499,
      shirt: require("../../../assets/shirt6.png"),
      id: "5",
      check: false,
    },
    {
      title: "Sana Safinaz",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo7.png"),
      background: "#9C1714",
      price: 999,
      shirt: require("../../../assets/shirt7.png"),
      id: "6",
      check: false,
    },
    {
      title: "J Dot",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo1.png"),
      background: "#ed1b24",
      price: 899,
      shirt: require("../../../assets/shirt1.png"),
      id: "7",
      check: false,
    },
    {
      title: "Nishat Linen",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo2.png"),
      background: "#E7B635",
      price: 599,
      shirt: require("../../../assets/shirt2.png"),
      id: "8",
      check: false,
    },
    {
      title: "Alkaram Studios",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo3.png"),
      background: "#54BAB9",
      price: 1299,
      shirt: require("../../../assets/shirt7.png"),
      id: "9",
      check: false,
    },
    {
      title: "Beach Tree",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo4.png"),
      background: "#ffffff",
      price: 999,
      shirt: require("../../../assets/shirt4.png"),
      id: "10",
      check: false,
    },
    {
      title: "Sapphire",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo5.png"),
      background: "#4A855F",
      price: 999,
      shirt: require("../../../assets/shirt5.png"),
      id: "11",
      check: false,
    },
    {
      title: "Bonanza Satrangi",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo6.png"),
      background: "#000000",
      price: 1499,
      shirt: require("../../../assets/shirt6.png"),
      id: "12",
      check: false,
    },
    {
      title: "Sana Safinaz",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo7.png"),
      background: "#9C1714",
      price: 799,
      shirt: require("../../../assets/shirt7.png"),
      id: "13",
      check: false,
    },
  ]);
  const [check, setCheck] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction color="white" onPress={() => {}} />
        <Appbar.Content color="white" title="Customer Purchases" />
        <Appbar.Action
          color="white"
          icon="bike"
          onPress={() => {
            navigation.navigate("RiderList");
          }}
        />
      </Appbar.Header>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item, index }) => (
          <View style={{ flex: 1 }}>
            <Surface style={{ height: 80, width: "100%", margin: 2 }}>
              <Card.Title
                style={{
                  flex: 1,
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                title={item.title}
                titleStyle={{ fontSize: 15, fontWeight: "600" }}
                left={(props) => <Avatar.Image size={50} source={item.shirt} />}
                right={() => (
                  <View style={{ flexDirection: "column" }}>
                    <IconButton
                      icon="map-clock"
                      color="#A0BBD6"
                      onPress={() => {
                        navigation.navigate("MapScreen");
                      }}
                    />
                    <Checkbox
                      status={item.check ? "checked" : "unchecked"}
                      onPress={() => {
                        data[index].check = !data[index].check;
                        console.log(item.check);
                        setCheck(!check);
                      }}
                    />
                  </View>
                )}
              />
            </Surface>
            <Divider />
          </View>
        )}
      />
    </View>
  );
};

export default AdminList;
