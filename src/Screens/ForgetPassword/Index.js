import { View, Text } from 'react-native';
import React from 'react';
import { Card, Avatar, IconButton, Chip, Appbar } from 'react-native-paper';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Appbar.Header>
        <Appbar.BackAction
          color='white'
          onPress={() => {
            navigation.goBack();
          }}
        />
        <Appbar.Content color='white' title='Forgot Password' />
      </Appbar.Header>
      <View style={styles.container}>
        <Text style={styles.text}>
          select which contact details we should use to reset your password
        </Text>
        <Chip
          icon={() => (
            <IconButton size={50} icon='message-text' color='#9CB5CD' />
          )}
          mode='outlined'
          selected={false}
          selectedColor='#6c6c6c'
          style={styles.chip}
          onPress={() => {
            navigation.navigate('ResetPassword');
          }}
        >
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 14, color: '#757575' }}>Via SMS:</Text>
            <Text style={{ color: '#3A404A' }}>+6282*****923</Text>
          </View>
        </Chip>
        <Chip
          icon={() => <IconButton size={50} icon='email' color='#9CB5CD' />}
          mode='outlined'
          selected={false}
          selectedColor='#6c6c6c'
          style={styles.chip}
          onPress={() => navigation.navigate('ResetPassword')}
        >
          <View style={{ flexDirection: 'column' }}>
            <Text style={{ fontSize: 14, color: '#757575' }}>Via Email:</Text>
            <Text style={{ color: '#3A404A' }}>ex****@domain.com</Text>
          </View>
        </Chip>
      </View>
    </View>
  );
};

export default ForgotPassword;
