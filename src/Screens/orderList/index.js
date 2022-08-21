import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../../config/firebase";

const OrderList = () => {
  const [users, setUsers] = useState();
  const db = getFirestore();
  const reef = collection(db, "user");

  useEffect(() => {
    getDocs(reef)
      .then((snapshot) => {
        console.log("-------------", snapshot);
        let book = [];
        snapshot.docs.forEach((doc) => {
          book.push({ ...doc.data() });
        });
        console.log(book);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <View>
      <Text>OrderList</Text>
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({});
