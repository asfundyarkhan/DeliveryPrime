import { SafeAreaView, View, Text, Image, Pressable } from "react-native";
import React, { useState } from "react";
import MapView, {
  Callout,
  Circle,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import styles from "./Styles";
import {
  FAB,
  Searchbar,
  Surface,
  Appbar,
  IconButton,
} from "react-native-paper";

const MapScreen = ({ navigation }) => {
  const [radius, setRadius] = useState(0);
  const [sourcePath, setSourcePath] = useState(
    require("../../../assets/location.png")
  );
  const onSourceChange = (sourcePath, radius) => {
    setSourcePath(null);
    setRadius(1000);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <View style={styles.container}>
      <Appbar.Header style={{ zIndex: 1 }}>
        <Appbar.BackAction
          color="white"
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content color="white" title="Map View" />
      </Appbar.Header>
      <Searchbar
        placeholder="Search Location"
        onChangeText={onChangeSearch}
        placeholderTextColor="green"
        value={searchQuery}
        style={styles.searchBar}
      />
      <Surface style={styles.surface} elevation={4}>
        <Pressable
          onPress={() => {
            console.log("clicked");
          }}
        >
          <Image source={require("../../../assets/homeIcon.png")} />
        </Pressable>
        <IconButton icon="cart" />
      </Surface>
      <MapView
        style={styles.container}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
      >
        <Circle
          center={{ latitude: 37.8030244, longitude: -122.4351431 }}
          radius={radius}
          fillColor="rgba(255,219,148,0.3)"
          strokeWidth={0}
        />
        <Marker
          onPress={onSourceChange}
          coordinate={{ latitude: 37.8030244, longitude: -122.4351431 }}
        >
          <Image source={sourcePath} />
          <Callout
            tooltip={true}
            onPress={() => {
              navigate("Details");
            }}
          >
            <View style={styles.smallContainer}>
              <Text style={styles.textTitle}>{"Title of the Location"} </Text>
              <Text style={styles.comment}>{"city"}</Text>
              <Text style={styles.timeStamp}>
                {" "}
                {"PKR 999"}{" "}
                <Pressable onPress={() => {}}>
                  <Text style={styles.details}>View Details</Text>
                </Pressable>
              </Text>
            </View>
          </Callout>
        </Marker>
        <Marker
          coordinate={{ latitude: 37.7900212, longitude: -122.42515132 }}
          title={"Something to show"}
        >
          <Image source={require("../../../assets/location.png")} />
        </Marker>
        <Marker
          coordinate={{ latitude: 37.7925259, longitude: -122.4651431 }}
          title={"Something to show"}
        >
          <Image source={require("../../../assets/location.png")} />
        </Marker>
      </MapView>
    </View>
  );
};

export default MapScreen;
