import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: 320,
    height: 200,
    resizeMode: "contain",
  },
  text: {
    marginTop: 70,
    fontSize: 13,
    color: "#54BAB9",
    textAlign: "center",
    position: "absolute",
    bottom: "10%",
    marginHorizontal: "10%",
  },
  title: {
    fontSize: 22,
    margin: 10,
    color: "#54BAB9",
    textAlign: "center",
  },
  buttonText: {
    color: "#54BAB9",
    fontSize: 13,
    fontWeight: "normal",
    marginTop: "30%",
    marginLeft: "2%",
    alignContent: "center",
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default styles;
