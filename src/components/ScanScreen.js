import React from 'react';

import {
  Linking,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import Camera from 'react-native-camera';

class ScanScreen extends React.Component {

  scanBarcode(code) {
    alert(code.data)
  }

  render() {
    let cancelButton = null;
    this.barCodeFlag = true;

    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          onBarCodeRead={code => this.scanBarcode(code)}
          style={styles.preview}
          barCodeTypes={[
            'aztec',
            'code128',
            'code39',
            'code39mod43',
            'code93',
            'ean13',
            'ean8',
            'pdf417',
            'qr',
            'upce'
          ]}
          aspect={Camera.constants.Aspect.fill}>
        </Camera>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
};

export default ScanScreen;
