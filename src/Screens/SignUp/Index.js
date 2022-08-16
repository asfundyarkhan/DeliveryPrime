import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./Styles";
import { Button, TextInput, ThemeProvider } from "react-native-paper";
import { Formik } from "formik";
import { SignupForm } from "./SignupForm";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../App.styles";
const SignUp = () => {
  const navigation = useNavigation();
  const handleSignUp = () => {
    navigation.navigate("SignIn");
  };
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.logo}>
        <Image
          style={{ resizeMode: "contain", height: 200, width: 200 }}
          source={require("../../../assets/Logo.jpeg")}
        />
      </View> */}
      <Text style={styles.text}>Sign UP</Text>
      <Formik
        initialValues={{ email: "", password: "", username: "" }}
        onSubmit={handleSignUp}
        validationSchema={SignupForm}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          setFieldTouched,
          touched,
        }) => (
          <>
            <View style={{ marginTop: 10 }}>
              <TextInput
                mode="outlined"
                label={"Email"}
                onFocus={() => setFieldTouched("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                testID="email"
                onChangeText={handleChange("email")}
                style={styles.input}
              ></TextInput>
              {touched.email && errors.email ? (
                <Text style={styles.error}>{errors.email}</Text>
              ) : null}
              <TextInput
                label={"User Name"}
                mode="outlined"
                onFocus={() => setFieldTouched("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                testID="username"
                onChangeText={handleChange("username")}
                style={styles.input}
              ></TextInput>
              {touched.username && errors.username ? (
                <Text style={styles.error}>{errors.username}</Text>
              ) : null}
              <TextInput
                label={"Password"}
                mode="outlined"
                onFocus={() => setFieldTouched("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                right={
                  <TextInput.Icon
                    name="eye"
                    style={{ marginRight: 10, marginTop: 10 }}
                    onPress={() => {
                      setHidePassword(!hidePassword);
                    }}
                  />
                }
                onChangeText={handleChange("password")}
                style={styles.input}
              ></TextInput>
              {touched.password && errors.password ? (
                <Text style={styles.error}>{errors.password}</Text>
              ) : null}
            </View>
            <Button
              mode="contained"
              onPress={() => {
                handleSubmit;
              }}
              style={styles.button}
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </Button>
          </>
        )}
      </Formik>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Text>Already have an account ?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          <Text style={{ color: theme.colors.primary }}> Sign In</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
