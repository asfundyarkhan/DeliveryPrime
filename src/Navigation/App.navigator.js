import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BrandSelection from "../Screens/BrandSelection/Index";
import Home from "../Screens/Home/Index";
import OnBoarding from "../Screens/Onboarding/Index";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer initialRouteName="Home">
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="OnBoarding" component={OnBoarding} />
        <Screen name="BrandSelection" component={BrandSelection} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
