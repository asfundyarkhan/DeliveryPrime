import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import BrandSelection from "../Screens/BrandSelection/Index";
import Home from "../Screens/Home/Index";
import OnBoarding from "../Screens/Onboarding/Index";
import SignIn from "../Screens/SignIn/Index";
import SignUp from "../Screens/SignUp/Index";
import ForgotPassword from "../Screens/ForgetPassword/Index";
import ResetPassword from "../Screens/ResetPassword/Index";
import CartScreen from "../Screens/Cart";
import PaymentMethod from "../Screens/PaymentMethod/Index";
import CardPayment from "../Screens/CardPayment/Index";
import MapScreen from "../Screens/MapView/Index";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer initialRouteName="MapScreen">
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="MapScreen" component={MapScreen} />
        <Screen name="OnBoarding" component={OnBoarding} />
        <Screen name="Home" component={Home} />
        <Screen name="BrandSelection" component={BrandSelection} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="ResetPassword" component={ResetPassword} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="PaymentMethod" component={PaymentMethod} />
        <Screen name="CartScreen" component={CartScreen} />
        <Screen name="CardPayment" component={CardPayment} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
