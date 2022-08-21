import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  fab: {
    position: "absolute",
    top: 70,
    right: 12,
    width: "12%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    zIndex: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  containerFlatList: {
    flexDirection: "row",
    flex: 1,
    width: 200,
    height: 200,
    backgroundColor: "blue",
    alignItems: "center",
    borderRadius: 10,
  },
  textTitle: {
    fontSize: 13,
    fontWeight: "900",
    color: "#000",
  },
  timeStamp: {
    fontSize: 12,
    fontWeight: "800",
    color: "#000",
  },
  comment: {
    fontSize: 10,
    fontFamily: "Foundation",
    fontWeight: "600",
    color: "black",
  },
  smallContainer: {
    justifyContent: "center",
    padding: 7,
    alignContent: "center",
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  details: {
    fontSize: 11,
    fontWeight: "800",
    color: "green",
    marginLeft: 50,
    marginTop: 2,
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: "80%",
    marginTop: 10,
    alignSelf: "center",
    zIndex: 10,
  },
  surface: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    bottom: 10,
    padding: 10,
    height: 70,
    width: "90%",
    borderRadius: 40,
    backgroundColor: "white",
    opacity: 0.8,
    alignItems: "center",
    justifyContent: "space-around",
    zIndex: 10,
  },
  logo: {
    marginLeft: "20%",
    width: "40%",
    height: "50%",
    resizeMode: "contain",
  },
});
export default styles;
