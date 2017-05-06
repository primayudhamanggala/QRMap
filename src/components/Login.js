import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image
} from 'react-native';

import LoginForm from './LoginForm';

const Login = () => (
  <View style={styles.loginWrapper}>
    <View style={styles.logoImageWrapper}>
      <Image
        style={styles.logoImage}
        source={{uri: 'https://cdn4.iconfinder.com/data/icons/world-travel-guide/512/travel-07-512.png'}}
      />
      <Text style={styles.title}>We Bike</Text>
    </View>
    <View>
      <LoginForm />
    </View>
  </View>
);

const styles = {
  loginWrapper: {
    flex: 1,
    backgroundColor: '#1abc9c',
  },
  logoImageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: 90,
    height: 90,
  },
  title: {
    fontSize: 20,
    color: 'white',
    padding: 5,
    fontWeight: 'bold',
  },
};

export default Login;
