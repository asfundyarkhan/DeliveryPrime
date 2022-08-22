import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState, useCallback } from "react";
import { Appbar, Surface, Avatar, Snackbar, Button } from "react-native-paper";
import { theme } from "../../../App.styles";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles";
import colRef from "../../config/firebase";
import { addDoc } from "firebase/firestore";
import GetAddress from "../../components/GetAddress";
import { removeFromCart } from "../../store/features/cartSlice";

const CartScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { items, totalPrice } = useSelector((state) => state.Cart);
  const [isVisible, setVisible] = useState(false);
  const [address, setAddress] = useState("");
  const [disable, setDisable] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setDisable(false);
    }, [])
  );

  const { user } = useSelector((state) => state.Cart);
  const handleAddData = async () => {
    setDisable(true);
    if (address) {
      try {
        await addDoc(colRef, {
          user: user,
          items: items,
          totalPrice: totalPrice,
          address: address,
        }).then(() => {
          setVisible(false);
          navigation.navigate("PaymentMethod");
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Entre your Address");
    }
  };

  const handleOnPress = (id, price) => {
    dispatch(removeFromCart({ id, price }));
  };
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content color="white" title="Cart" />
      </Appbar.Header>

      {items.length ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={styles.heading}>Your Currently Selected items </Text>
          <FlatList
            data={items}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ListFooterComponentStyle={{
              height: 40,
              backgroundColor: theme.colors.primary,
              borderRadius: theme.roundness,
              marginVertical: 10,
            }}
            ListFooterComponent={(val) => (
              <Button
                labelStyle={{ color: "white" }}
                onPress={() => {
                  setVisible(true);
                  //handleAddData();
                }}
              >
                Total: {totalPrice}
              </Button>
            )}
            renderItem={(val) => {
              return (
                <Pressable
                  onPress={() => handleOnPress(val.item.id, val.item.price)}
                >
                  <Surface style={styles.surfaceStyle}>
                    <View style={styles.insideSurfaceview}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Avatar.Image size={80} source={val.item.shirt} />
                        <Text style={styles.textStyle}>
                          {val.item.articleName}
                        </Text>
                      </View>

                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: "600",
                          marginLeft: 5,
                        }}
                      >
                        Rs: {val.item.price}
                      </Text>
                    </View>
                  </Surface>
                </Pressable>
              );
            }}
          />
          {/* <Surface style={styles.btnStyle}>
            <Button labelStyle={{ color: "white" }}>Price</Button>
          </Surface> */}
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, color: theme.colors.primary }}>
            Your Cart Is Empty
          </Text>
        </View>
      )}

      {/* <Snackbar
        visible={isVisible}
        onDismiss={() => setVisible(false)}
        duration={1000}
      >
        item is being removed
      </Snackbar> */}
      <GetAddress
        isVisible={isVisible}
        onClose={() => setVisible(false)}
        title={"Delivery Address"}
        val={address}
        btnDisable={disable}
        onChange={setAddress}
        onActionPress={handleAddData}
      />
    </View>
  );
};

export default CartScreen;
