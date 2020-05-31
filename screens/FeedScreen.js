// import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
// import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker } from 'react-native-maps';
import {Audio, Video} from 'expo-av';
import VideoPlayer from 'expo-video-player';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
        <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: require('../assets/street.mp4'),
            }}
            inFullscreen={true}
            videoBackground='transparent'
            height={220}
        />
        <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: require('../assets/gate.mp4'),
            }}
            inFullscreen={true}
            videoBackground='transparent'
            height={220}
        />
        <VideoPlayer
            videoProps={{
                shouldPlay: true,
                resizeMode: Video.RESIZE_MODE_CONTAIN,
                source: require('../assets/shopping.mp4'),
            }}
            inFullscreen={true}
            videoBackground='transparent'
            height={220}
        />
    </ScrollView>
  );
}

var CovidMarker = () => {
  return CovidData.map((item) => {
    <MapView.Marker
      key={item.ID}
      coordinate={{ latitude: item.Latitude, longitude: item.Longitude }}
      title={item.Country_Region}
      description={Number(item.Confirmed)}
    >
    </MapView.Marker >

  }
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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