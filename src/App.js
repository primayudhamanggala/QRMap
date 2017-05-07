import React from 'react';
import {
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Login from './components/Login';
import Map from './components/Map';
import ScanScreen from './components/ScanScreen';

const App = StackNavigator({
  Main: {screen: Map},
  Login: {screen: Login},
  Scanner: {screen: ScanScreen},
});

export default App;
