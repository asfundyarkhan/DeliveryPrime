import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { Button, Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { theme } from "../../../App.styles";

import Sizes from "../../components/Sizes";
import { addToCart } from "../../store/features/cartSlice";
import styles from "./styles";

const ItemFinalizing = () => {
  const { params } = useRoute();
  const { articleName, shirt, price, description, id, title } = params;
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.Cart);

  const navigation = useNavigation();

  const [isVisible, setVisible] = useState(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <KeyboardAvoidingView>
        <Image
          source={shirt}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "40%",
            borderColor: theme.colors.primary,
            borderWidth: 2,
          }}
        />
        <View style={styles.body}>
          <Text style={styles.titleStyle}>{articleName}</Text>
          <Text style={styles.descriptionHeader}>Description</Text>
          {description.map((val) => (
            <Text style={styles.descriptionStyle}>{val}</Text>
          ))}
          <Text style={styles.titleSize}>Size</Text>
          <View style={styles.sizesView}>
            <Sizes text={"S"} />
            <Sizes text={"M"} />
            <Sizes text={"L"} />
            <Sizes text={"XL"} />
            <Text style={styles.inStockText}>In-Stock</Text>
          </View>
          <View style={styles.quantityView}>
            {/* <Text style={styles.quantityText}>Quantity :</Text>
            <TextInput
              placeholder="1"
              value={quantity}
              keyboardType="numeric"
              onChangeText={(val) => setQuantity(val)}
              style={styles.quantityInput}
            /> */}
          </View>
          <View style={styles.priceView}>
            <Text style={styles.priceText}>Price :</Text>
            <Text style={styles.priceValue}>{price}rs</Text>
          </View>
          <Button
            mode="text"
            style={{ backgroundColor: theme.colors.primary }}
            onPress={() => {
              setVisible(true);
              dispatch(addToCart({ articleName, shirt, price, id, title }));
            }}
          >
            <Text style={styles.btnText}>Add to Cart</Text>
          </Button>
          <Snackbar
            visible={isVisible}
            onDismiss={() => setVisible(false)}
            duration={700}
            style={styles.snackBarStyle}
          >
            Your item is Added to the cart
          </Snackbar>

          <Button
            mode="text"
            //   style={{  backgroundColor: theme.colors.primary }}
            onPress={() => {
              navigation.navigate("CartScreen");
            }}
          >
            <Text style={styles.btnText}>View Cart</Text>
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ItemFinalizing;
