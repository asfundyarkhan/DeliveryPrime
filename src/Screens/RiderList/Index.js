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

const RiderList = ({ navigation }) => {
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
      rider: 1,
    },
    {
      title: "Nishat Linen",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo2.png"),
      background: "#E7B635",
      price: 699,
      shirt: require("../../../assets/shirt2.png"),
      id: "1",
      check: true,
      rider: 2,
    },
    {
      title: "Alkaram Studios",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo3.png"),
      background: "#54BAB9",
      price: 799,
      shirt: require("../../../assets/shirt8.png"),
      id: "2",
      check: true,
      rider: 3,
    },
    {
      title: "Beach Tree",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo4.png"),
      background: "#ffffff",
      price: 799,
      shirt: require("../../../assets/shirt4.png"),
      id: "3",
      check: true,
      rider: 4,
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
      rider: 5,
    },
    {
      title: "Bonanza Satrangi",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo6.png"),
      background: "#000000",
      price: 1499,
      shirt: require("../../../assets/shirt6.png"),
      id: "5",
      check: true,
      rider: 6,
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
      rider: 7,
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
      rider: 8,
    },
    {
      title: "Nishat Linen",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo2.png"),
      background: "#E7B635",
      price: 599,
      shirt: require("../../../assets/shirt2.png"),
      id: "8",
      check: true,
      rider: 9,
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
      rider: 10,
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
      rider: 11,
    },
    {
      title: "Sapphire",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo5.png"),
      background: "#4A855F",
      price: 999,
      shirt: require("../../../assets/shirt5.png"),
      id: "11",
      check: true,
      rider: 12,
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
      rider: 13,
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
      rider: 14,
    },
  ]);
  const [check, setCheck] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.navigate("AdminList");
          }}
        />
        <Appbar.Content color="white" title="Rider Details" />
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
                title={`Rider: ${item.rider}`}
                titleStyle={{ fontSize: 15, fontWeight: "600" }}
                left={(props) => (
                  <Avatar.Image
                    size={50}
                    source={require("../../../assets/ronaldo.png")}
                  />
                )}
                right={() => (
                  <View style={{ flex: 1, margin: 10 }}>
                    <Button
                      icon="truck-delivery"
                      mode="contained"
                      disabled={item.check}
                      onPress={() => {
                        data[index].check = !data[index].check;
                        console.log(item.check);
                        setCheck(!check);
                      }}
                    >
                      Assign
                    </Button>
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

export default RiderList;
