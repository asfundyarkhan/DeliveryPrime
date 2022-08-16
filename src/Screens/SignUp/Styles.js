import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //alignContent: 'center',
  },
  logo: {
    marginTop: 10,
    height: 50,
    width: 200,
    resizeMode: "contain",
  },
  text: {
    marginTop: 150,
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
    //borderWidth: 1,
    borderColor: "#6c6c6c",
  },
  textInput: {
    marginTop: 20,
    marginLeft: 20,
  },
  input: {
    marginTop: 10,
    fontSize: 14,
    width: 350,
    height: 50,
    backgroundColor: "#F5F5F5",
  },
  error: {
    color: "red",
    padding: 5,
    fontSize: 12,
    marginTop: 1,
    marginLeft: 10,
    marginRight: 10,
  },
});
export default styles;
