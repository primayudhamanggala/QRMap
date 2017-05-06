import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor='#00695C'
          barStyle='light-content'
        />
        <View>
          <TextInput
            placeholder= 'username'
            placeholderTextColor='rgba(255, 255, 255, 0.5)'
            style={styles.input}
            underlineColorAndroid='transparent'
            returnKeyType='next'
            onSubmitEditing={() => this.password.focus()}
          />
          <TextInput
            placeholder= 'password'
            secureTextEntry
            placeholderTextColor='rgba(255, 255, 255, 0.5)'
            style={styles.input}
            underlineColorAndroid='transparent'
            ref={(input) => this.password = input}
          />
          <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = {
  container: {
    padding: 20,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginBottom: 20,
    height: 40,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    paddingVertical: 15,
    backgroundColor: '#16a085',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: '700',
  },
};

export default LoginForm;
