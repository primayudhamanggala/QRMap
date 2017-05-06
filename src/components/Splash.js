import React from 'react';
import {
  View,
  Text
} from 'react-native';

const Splash = () => (
  <View style={styles.homeWrapper}>
    <View style={styles.titleWrapper}>
      <Text style={styles.title}>Welcome</Text>
    </View>
    <View style={styles.subtitleWrapper}>
      <Text style={styles.subtitle}>Powered by Zordon</Text>
    </View>
  </View>
);

const styles = {
  homeWrapper: {
    backgroundColor: '#e74c3c',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitleWrapper: {
    paddingBottom: 20,
  },
  subtitle: {
    color: 'white',
    fontWeight: '200',
  },
};

export default Splash;
