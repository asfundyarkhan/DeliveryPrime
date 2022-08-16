import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    // justifyContent: 'center',
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "400",
    fontFamily: "poppins",
    marginTop: 20,
    marginBottom: 20,
    color: "#3A404A",
  },
  chip: {
    marginTop: 20,
    height: 100,
    width: 350,
    borderWidth: 2,
  },
});
export default styles;
