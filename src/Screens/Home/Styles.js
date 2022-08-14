import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000",
  },
  timeStamp: {
    fontSize: 11,
    fontFamily: "Font-Regular",
    fontWeight: "600",
    color: "gray",
    marginTop: 5,
  },
  comment: {
    fontSize: 15,
    fontFamily: "Foundation",
    fontWeight: "600",
    color: "gray",
  },
  smallContainer: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: "2%",
    marginTop: "3%",
    width: "80%",
    height: "100%",
    padding: "2%",
    backgroundColor: "#F1F1F1",
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    borderRadius: 25,
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  surface: {
    height: 200,
    borderRadius: 25,
    width: 180,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: "2%",
  },
  card: {
    width: "100%",
    height: 100,
  },
  modelStyles: {
    backgroundColor: "white",
    borderRadius: 10,
    width: 200,
    height: 200,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    margin: "2%",
  },
});
export default styles;
