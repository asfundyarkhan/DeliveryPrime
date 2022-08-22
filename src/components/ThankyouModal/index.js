import { View, Text, Modal, Image } from "react-native";
import React from "react";
import styles from "./styles";
import { Button } from "react-native-paper";

const ThankyouModal = ({
  isVisible,
  onClose,
  onActionPress,
  content,
  title,
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
          <View style={styles.subView}>
            <Image
              style={{
                resizeMode: "contain",
                height: 200,
                width: 200,
                backgroundColor: "#f2f2f2",
                opacity: 0.5,
              }}
              source={require("../../../assets/logo.jpeg")}
            />
            <Text style={styles.textStyle}>{title}</Text>
            <Text style={styles.textStyle}>{content}</Text>
            <Button
              mode="contained"
              onPress={onActionPress}
              style={styles.button}
            >
              <Text style={{ color: "white" }}>Proceed</Text>
            </Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ThankyouModal;
