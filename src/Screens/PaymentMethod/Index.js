import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { Appbar, IconButton } from "react-native-paper";
import { theme } from "../../../App.styles";
import ThankyouModal from "../../components/ThankyouModal";

const PaymentMethod = () => {
  const navigation = useNavigation();

  const [isVisible, setVisible] = useState(false);

  const handleModalPressable = () => {
    setVisible(false);
    navigation.reset({ index: 0, routes: [{ name: "Home" }] });
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
      <Pressable style={styles.Button} onPress={() => setVisible(true)}>
        <IconButton size={70} icon="cash-marker" style={styles.image} />
      </Pressable>
      <Text style={styles.text}>Credit Card</Text>
      <Pressable
        style={styles.Button2}
        onPress={() => navigation.navigate("CardPayment")}
      >
        <IconButton size={70} icon="credit-card-outline" style={styles.image} />
      </Pressable>
      <ThankyouModal
        isVisible={isVisible}
        onClose={() => setVisible(false)}
        onActionPress={handleModalPressable}
      />
    </View>
  );
};

export default PaymentMethod;
