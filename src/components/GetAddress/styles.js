import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "rgba(196, 196, 196, 0.5)",
  },
  contentContainer: {
    position: "absolute",
    width: "95%",
    bottom: "30%",
    height: 500,
    alignSelf: "center",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  heading: {
    // marginBottom: 24,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    width: "90%",
    borderRadius: 25,
    marginTop: 50,
    height: 50,
    padding: 5,
    // borderWidth: 1,
    borderColor: "#6c6c6c",
  },
});

export default styles;
