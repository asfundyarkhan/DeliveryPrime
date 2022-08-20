import { View, Text, FlatList, Pressable } from "react-native";
import React, { useState } from "react";
import { Appbar, Surface, Avatar, Snackbar, Button } from "react-native-paper";
import { theme } from "../../../App.styles";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import styles from "./styles";

const CartScreen = () => {
  const navigation = useNavigation();
  const { items, totalPrice } = useSelector((state) => state.Cart);
  const [isVisible, setVisible] = useState(false);

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
            ListFooterComponent={() => (
              <Button
                labelStyle={{ color: "white" }}
                onPress={() => navigation.navigate("PaymentMethod")}
              >
                Total: {totalPrice}
              </Button>
            )}
            renderItem={(val) => {
              return (
                <Pressable onLongPress={() => setVisible(true)}>
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

                      <Text style={{ fontSize: 24, fontWeight: "600" }}>
                        {val.item.price}
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

      <Snackbar
        visible={isVisible}
        onDismiss={() => setVisible(false)}
        duration={1000}
      >
        item is being removed
      </Snackbar>
    </View>
  );
};

export default CartScreen;
