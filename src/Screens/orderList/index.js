import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import colRef from "../../config/firebase";
import { getDocs } from "firebase/firestore";

const OrderList = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getDocs(colRef).then((snapshot) => {
      const data = [];
      snapshot.docs.forEach((doc) => {
        data.push(doc.data().OrderDetails);
        alert(JSON.stringify(data));
      });
      setUsers(data);
    });
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* {users.map((items) => (
        <Text>{items.}</Text>
      ))} */}
      {console.log(users)}
      <Text>Hello there</Text>
    </View>
  );
};

export default OrderList;

const styles = StyleSheet.create({});
