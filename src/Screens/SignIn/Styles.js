import { StyleSheet } from "react-native";
import { theme } from "../../../App.styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //alignContent: 'center',
  },
  logo: {
    marginTop: 10,
    height: 100,
    width: 200,
    resizeMode: "contain",
  },
  text: {
    marginTop: 100,
    fontSize: 20,
    margin: 10,
    color: "black",
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
  textInput: {
    marginTop: 20,
    marginLeft: 20,
  },
  input: {
    marginTop: 5,
    backgroundColor: "#F5F5F5",
    fontSize: 15,
    width: 350,
    height: 50,
  },
  error: {
    color: "red",
    padding: 5,
    fontSize: 12,
    marginTop: 1,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  snackBarStyle: {
    // position: "absolute",
    backgroundColor: theme.colors.primary,
    justifyContent: "center",
  },
});
export default styles;
