import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { TextInput, Button, Appbar } from 'react-native-paper';
import styles from './Styles';
import { ResetPasswordForm } from './ResetPasswordForm';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
  const navigation = useNavigation();
  const handleSave = () => {
    // navigation.navigate("Congradulation");
    console.log('pressed');
  };
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header>
        <Appbar.BackAction color='white' onPress={() => navigation.goBack()} />
        <Appbar.Content color='white' title='Reset Password' />
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={styles.text}>Create a new Password</Text>
        <Formik
          initialValues={{ password: '', passwordConfirmation: '' }}
          onSubmit={handleSave}
          validationSchema={ResetPasswordForm}
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
              <View style={{ marginTop: 30 }}>
                <TextInput
                  mode='outlined'
                  label={'New Password'}
                  right={
                    <TextInput.Icon
                      name='eye'
                      style={{ marginRight: 10, marginTop: 10 }}
                      onPress={() => {
                        setHidePassword(!hidePassword);
                      }}
                    />
                  }
                  onFocus={() => setFieldTouched('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  testID='password'
                  secureTextEntry={hidePassword}
                  onChangeText={handleChange('password')}
                  style={styles.input}
                ></TextInput>
                {touched.password && errors.password ? (
                  <Text style={styles.error}>{errors.password}</Text>
                ) : null}
                <TextInput
                  mode='outlined'
                  label={'Confirm New Password'}
                  onFocus={() => setFieldTouched('passwordConfirmation')}
                  onBlur={handleBlur('passwordConfirmation')}
                  secureTextEntry={hidePassword}
                  testID='passwordConfirmation'
                  value={values.passwordConfirmation}
                  right={
                    <TextInput.Icon
                      name='eye'
                      style={{ marginRight: 10, marginTop: 10 }}
                      onPress={() => {
                        setHidePassword(!hidePassword);
                      }}
                    />
                  }
                  onChangeText={handleChange('passwordConfirmation')}
                  style={styles.input}
                ></TextInput>
                {touched.passwordConfirmation && errors.passwordConfirmation ? (
                  <Text style={styles.error}>
                    {errors.passwordConfirmation}
                  </Text>
                ) : null}
              </View>
              <Button
                mode='contained'
                onPress={handleSubmit}
                style={styles.button}
              >
                <Text style={{ color: 'white' }}>Save</Text>
              </Button>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default ResetPassword;
