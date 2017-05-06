import React from 'react';
import {
  View,
  Text,
} from 'react-native';

const Header = () => (
  <View style={styles.headerWrapper}>
    <Text>WeBike</Text>
  </View>
);

const styles = {
  headerWrapper: {
    backgroundColor: 'teal',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 25
  }
}

export default Header;
