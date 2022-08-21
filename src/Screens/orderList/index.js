import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  QuerySnapshot,
} from "firebase/firestore";
import { firebase } from "../../config/firebase";

const OrderList = () => {
  const [users, setUsers] = useState();
  const listRef = firebase.firestore().collection("User");

  useEffect(async () => {
    listRef.onSnapshot((querySnapshot) => {
      const list = [];
      querySnapshot.forEach((doc) => {
        const { OrderDetails } = doc.data();
        list.push(OrderDetails);
      });
      setUsers(list);
    });
  }, []);

  // const db = getFirestore();
  // const reef = collection(db, "user");

  // useEffect(() => {()
  //   getDocs(reef)
  //     .then((snapshot) => {
  //       console.log("-------------", snapshot);
  //       let book = [];
  //       snapshot.docs.forEach((doc) => {
  //         book.push({ ...doc.data() });
  //       });
  //       console.log(book);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {users.map((items) => (
        <Text>{items}</Text>
      ))}
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({});
