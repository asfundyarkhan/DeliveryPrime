import { StyleSheet } from "react-native";
import { theme } from "../../../App.styles";

const styles = StyleSheet.create({
  heading: {
    margin: 15,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  surfaceStyle: {
    backgroundColor: theme.colors.accent,
    paddingVertical: 20,
    //paddingHorizontal: 10,
    // alignItems: "flex-start",
    margin: 10,
    borderRadius: 20,
    // flexDirection: "row",
  },
  textStyle: { margin: 10, fontSize: 20, fontWeight: "600" },
  insideSurfaceview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    flexDirection: "row",
  },
  btnStyle: {
    alignItems: "center",
    justifyContent: "flex-end",
    opacity: 0.8,
    position: "absolute",
    backgroundColor: "black",
    marginVertical: 20,
    //  backgroundColor: theme.colors.accent,
    paddingVertical: 20,
    margin: 10,
    borderRadius: 20,
  },
});

export default styles;
