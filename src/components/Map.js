import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/FontAwesome';

import Header from './Header';

const { width, height } = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.0922
const LONGITUTE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Map extends React.Component {
  constructor() {
    super()
    this.state = {
      initialPosition: {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0,
        longitudeDelta: 0,
      },
      markerPosition: {
        latitude: 0,
        longitude: 0,
      }
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <View style={styles.loginButton}>
        <TouchableOpacity
          onPress={ () => navigation.navigate('Login') }
        >
          <Icon name='user' />
        </TouchableOpacity>
      </View>
    )
  })

  watchID: ?number = null

  componentWillReceiveProps(nextProps) {
    if (this.props.coordinate !== nextProps.coordinate) {
      this.state.coordinate.timing({
        ...nextProps.coordinate,
        duration: 500
      }).start();
    }
  }

  componentDidMount(){
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = parseFloat(position.coords.latitude)
      let long = parseFloat(position.coords.longitude)

      let initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUTE_DELTA
      }

      this.setState({initialPosition: initialRegion})
      this.setState({markerPosition: initialRegion})
    },
    (error) => alert(JSON.stringify(error)),
    {enableHighAccuray: true, timeout: 1000000, maximumAge: 1000}
    )
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let lat = parseFloat(position.coords.latitude)
      let long = parseFloat(position.coords.longitude)

      let lastRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUTE_DELTA
      }

      this.setState({initialPosition: lastRegion})
      this.setState({markerPosition: lastRegion})
    })
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mapWrapper}>
        <MapView
        region={this.state.initialPosition}
        style={styles.map}
        >
          <MapView.Marker
            coordinate={this.state.markerPosition}
          >
            <View style={styles.radius}>
              <View style={styles.marker}>
              </View>
            </View>
          </MapView.Marker>
        </MapView>
        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => navigate('Scanner')}
        >
        </ActionButton>
      </View>
    )
  }
}

const styles = {
  mapWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    height: 605,
    width: 412,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radius: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 122, 255, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 112, 255, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    paddingRight: 10,
  },
  marker: {
    height: 20,
    width: 20,
    borderWidth: 3,
    borderColor: 'white',
    borderRadius: 20/2,
    overflow: 'hidden',
    backgroundColor: '#007AFF'
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
}

export default Map;
