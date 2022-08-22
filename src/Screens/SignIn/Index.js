import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React, { useState } from "react";
import styles from "./Styles";
import { Button, IconButton, TextInput } from "react-native-paper";
import { Formik } from "formik";
import { LoginForm } from "./LoginForm";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../../App.styles";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/features/cartSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SignIn = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const auth = getAuth();

  const [hidePassword, setHidePassword] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setAdmin] = useState(false);

  const handleLogin = (values) => {
    if (isAdmin) {
      signInWithEmailAndPassword(auth, values.email, values.password)
        .then(() => navigation.navigate("AdminList"))
        .catch(() => {
          alert("Invalid Crendtials");
        });
    } else {
      dispatch(addUser(values.email));
      navigation.navigate("BrandSelection");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={{
            resizeMode: "contain",
            height: 200,
            width: 200,
            backgroundColor: "#f2f2f2",
            opacity: 0.5,
          }}
          source={require("../../../assets/logo.jpeg")}
        />
      </View>
      <Text style={styles.text}>Sign In to your account</Text>
      <IconButton
        size={70}
        icon="shield-crown"
        color="#54BAB9"
        onPress={() => {
          setAdmin(!isAdmin);
          // navigation.navigate("AdminList");
        }}
      />

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleLogin}
        validationSchema={LoginForm}
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
            <View style={{ marginTop: 70 }}>
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
                mode="outlined"
                label={"Password"}
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
              onPress={handleSubmit}
              style={styles.button}
            >
              <Text style={{ color: "white" }}>Sign In</Text>
            </Button>
          </>
        )}
      </Formik>
      <Button
        mode="text"
        onPress={() => {
          navigation.navigate("ForgotPassword");
        }}
      >
        <Text style={{ color: theme.colors.primary }}>
          Forgot the password?
        </Text>
      </Button>
      <View style={{ flexDirection: "row", marginTop: 40 }}>
        <Text>Dont have and account?</Text>
        <Pressable
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          <Text style={{ color: theme.colors.primary }}> Sign Up</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
