import { StyleSheet } from "react-native";
import { theme } from "../../../App.styles";

const styles = StyleSheet.create({
  mainContainer: { flex: 1 },
  body: { margin: 15 },

  titleStyle: {
    fontSize: 30,
    fontWeight: "800",
    marginBottom: 10,
  },
  descriptionHeader: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 10,
  },
  descriptionStyle: {
    fontSize: 15,
    marginBottom: 5,
  },
  titleSize: {
    fontSize: 25,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 5,
  },
  sizesView: {
    flexDirection: "row",
  },
  inStockText: {
    alignSelf: "center",
    justifyContent: "flex-end",
  },
  quantityView: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 25,
    fontWeight: "600",
    marginTop: 5,
  },
  quantityInput: {
    marginLeft: 50,
    flex: 0.5,
    padding: 10,
    // backgroundColor: theme.colors.accent,
    borderRadius: theme.roundness,
    backgroundColor: "rgba(108, 108, 108, 0.2)",
    paddingHorizontal: 20,
  },
  priceView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 25,
    fontWeight: "600",
  },
  priceValue: {
    fontSize: 30,
    fontWeight: "600",
  },
  snackBarStyle: {
    position: "absolute",
    justifyContent: "flex-end",
  },
  btnText: { color: "#6c6c6c" },
});

export default styles;
