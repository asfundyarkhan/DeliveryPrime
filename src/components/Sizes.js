import { StyleSheet, Text, Pressable } from "react-native";
import React, { useState } from "react";
import { theme } from "../../App.styles";

const Sizes = ({ text }) => {
  const [active, setActive] = useState(false);
  return (
    <Pressable
      style={[
        styles.container,
        { backgroundColor: active ? theme.colors.primary : "white" },
      ]}
      onPress={() => setActive(!active)}
    >
      <Text style={{ color: active ? "white" : "black" }}>{text}</Text>
    </Pressable>
  );
};

export default Sizes;

const styles = StyleSheet.create({
  container: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: theme.roundness,
    margin: 10,
  },
});
