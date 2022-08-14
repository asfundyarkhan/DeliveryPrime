import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //alignContent: 'center',
  },
  text: {
    marginTop: 25,
    fontSize: 20,
    color: "#3A404A",
  },
  button: {
    width: "90%",
    borderRadius: 25,
    marginTop: 50,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: "#9CB5CD",
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
});
export default styles;
