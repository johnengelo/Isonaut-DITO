// import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import { required } from '@hapi/joi';


const LATITUDE = 14.599512;
const LONGITUDE = 120.98422;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.0421;

export default function LinksScreen() {
  return (
    <View style={styles.container}>
        <MapView 
            style={styles.map}
            initialRegion={{
                latitude: LATITUDE,
                longitude: LONGITUDE, 
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            }}>
            <Marker coordinate={{
              latitude: 14.599512,
              longitude: 120.98422, 
            }}
            image={required('../assets/image/pin_pops.png')}/>
        </MapView>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

