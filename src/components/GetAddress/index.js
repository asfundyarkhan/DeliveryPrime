import { View, Text, Modal, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Appbar, Button, TextInput } from "react-native-paper";
import { theme } from "../../../App.styles";

const GetAddress = ({
  isVisible,
  onClose,
  title,
  val,
  onChange,
  onActionPress,
  btnDisable,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      transparent={true}
      onDismiss={onClose}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.heading}>{title}</Text>
          <View style={{ width: "100%", height: 100 }}>
            <TextInput
              value={val}
              mode={"outlined"}
              placeholder={"Entre your Address"}
              multiline={true}
              onChangeText={(txt) => onChange(txt)}
              style={{
                padding: 20,
              }}
            />
          </View>
          <Button
            mode="contained"
            onPress={onActionPress}
            disabled={btnDisable}
            style={styles.button}
          >
            <Text style={{ color: "white" }}>Proceed</Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default GetAddress;
