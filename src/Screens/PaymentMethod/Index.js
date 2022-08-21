import {
  View,
  Text,
  SafeAreaView,
  Pressable,
  Image,
  ActionSheetIOS,
} from "react-native";
import React, { useState } from "react";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { Appbar, IconButton } from "react-native-paper";
import { theme } from "../../../App.styles";
import { addDoc } from "firebase/firestore";
import colRef from "../../config/firebase";

const PaymentMethod = () => {
  const navigation = useNavigation();

  const [] = useState();

  const handleCOD = () => {
    // return addDoc(colRef, {});
  };
  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: theme.colors.primary }}>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content color="white" title="Payment Methods" />
      </Appbar.Header>
      <View style={styles.colorStyle}>
        <Text style={styles.text}>Select Payment Method</Text>
      </View>
      <Text style={styles.text}>Cash on delivery</Text>
      <Pressable style={styles.Button} onPress={() => handleCOD}>
        <IconButton size={70} icon="cash-marker" style={styles.image} />
      </Pressable>
      <Text style={styles.text}>Credit Card</Text>
      <Pressable
        style={styles.Button2}
        onPress={() => navigation.navigate("CardPayment")}
      >
        <IconButton size={70} icon="credit-card-outline" style={styles.image} />
      </Pressable>
    </View>
  );
};

export default PaymentMethod;
