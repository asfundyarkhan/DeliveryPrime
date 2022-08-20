import { Text, View, FlatList, ImageBackground, Image } from "react-native";
import React, { useState } from "react";
import {
  Appbar,
  Card,
  Surface,
  Modal,
  Portal,
  Provider,
  Avatar,
  Button,
  Snackbar,
  IconButton,
} from "react-native-paper";
import styles from "./Styles";
import { addToCart } from "../../store/features/cartSlice";
import { useDispatch } from "react-redux";

const Home = ({ navigation }) => {
  const data = [
    {
      title: "J Dot",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo1.png"),
      background: "#ed1b24",
      price: "PKR 1199",
      shirt: require("../../../assets/shirt1.png"),
      id: "0",
    },
    {
      title: "Nishat Linen",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo2.png"),
      background: "#E7B635",
      price: "PKR 699",
      shirt: require("../../../assets/shirt2.png"),
      id: "1",
    },
    {
      title: "Alkaram Studios",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo3.png"),
      background: "#54BAB9",
      price: "PKR 799",
      shirt: require("../../../assets/shirt8.png"),
      id: "2",
    },
    {
      title: "Beach Tree",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo4.png"),
      background: "#ffffff",
      price: "PKR 799",
      shirt: require("../../../assets/shirt4.png"),
      id: "3",
    },
    {
      title: "Sapphire",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo5.png"),
      background: "#4A855F",
      price: "PKR 1299",
      shirt: require("../../../assets/shirt5.png"),
      id: "4",
    },
    {
      title: "Bonanza Satrangi",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo6.png"),
      background: "#000000",
      price: "PKR 1499",
      shirt: require("../../../assets/shirt6.png"),
      id: "5",
    },
    {
      title: "Sana Safinaz",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo7.png"),
      background: "#9C1714",
      price: "PKR 999",
      shirt: require("../../../assets/shirt7.png"),
      id: "6",
    },
    {
      title: "J Dot",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo1.png"),
      background: "#ed1b24",
      price: "PKR 899",
      shirt: require("../../../assets/shirt1.png"),
      id: "7",
    },
    {
      title: "Nishat Linen",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo2.png"),
      background: "#E7B635",


      price: "PKR 599",
      shirt: require("../../../assets/shirt2.png"),
      id: "8",
    },
    {
      title: "Alkaram Studios",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo3.png"),
      background: "#54BAB9",
      price: "PKR 1299",
      shirt: require("../../../assets/shirt7.png"),
      id: "9",
    },
    {
      title: "Beach Tree",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo4.png"),
      background: "#ffffff",
      price: "PKR 999",
      shirt: require("../../../assets/shirt4.png"),
      id: "10",
    },
    {
      title: "Sapphire",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo5.png"),
      background: "#4A855F",
      price: "PKR 999",
      shirt: require("../../../assets/shirt5.png"),
      id: "11",
    },
    {
      title: "Bonanza Satrangi",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo6.png"),
      background: "#000000",
      price: "PKR 1499",
      shirt: require("../../../assets/shirt6.png"),
      id: "12",
    },
    {
      title: "Sana Safinaz",
      articleName: "shirt 1",
      Logo: require("../../../assets/Logo7.png"),
      background: "#9C1714",
      price: "PKR 799",
      shirt: require("../../../assets/shirt7.png"),
      id: "13",
    },
  ];

  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  //for modal
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  //for snackbar
  const [visible1, setVisible1] = useState(false);
  const onToggleSnackBar = ({ Logo, shirt, articleName, id, price, title }) => {
    setVisible1(!visible1);
    dispatch(addToCart({ Logo, shirt, articleName, id, price, title }));
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <Appbar.Header>
        <Appbar.Action icon="menu" color="white" onPress={() => {}} />
        <Appbar.Content color="white" title="Home" />
        <Appbar.Action
          icon="card-multiple"
          color="white"
          onPress={() => {
            navigation.navigate("BrandSelection");
          }}
        />
        <Appbar.Action
          icon="cart"
          color="white"
          onPress={() => {
            navigation.navigate("CartScreen");
          }}
        />
      </Appbar.Header>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id}
        //keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <Surface
            style={[styles.surface, { backgroundColor: "#9ED2C6" }]}
            elevation={4}
          >
            <Card style={{ height: 170, width: 150 }} onPress={showModal}>
              <Card.Title
                titleStyle={{ height: 5, color: "#9ED2C6" }}
                title={item.shirt}
                subtitleStyle={{ color: "#9ED2C6" }}
                subtitle={item.price}
                right={() => (
                  <IconButton
                    style={{ marginBottom: 20 }}
                    icon="cart-arrow-down"
                    color="#9ED2C6"
                    onPress={() => {
                      onToggleSnackBar(item);
                    }}
                  />
                )}
              />
              <Card.Cover style={styles.card} source={item.shirt} />
              <Portal>
                <Modal
                  visible={visible}
                  onDismiss={hideModal}
                  dismissable={true}
                  contentContainerStyle={styles.modelStyles}
                >
                  <View
                    style={{
                      height: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  ></View>
                  <Image style={styles.image} source={item.shirt} />
                </Modal>
              </Portal>
            </Card>
          </Surface>
        )}
      />
      <Snackbar
        visible={visible1}
        duration={2000}

        onDismiss={() => setVisible1(false)}

        // action={{
        //   label: "Undo",
        //   onPress: () => {
        //     // Do something
        //   },
        // }}
      >
        {`item added to cart `}
      </Snackbar>
    </View>
  );
};

export default Home;
