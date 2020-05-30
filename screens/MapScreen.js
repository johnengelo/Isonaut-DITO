// import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { RectButton, ScrollView } from 'react-native-gesture-handler';
import MapView from 'react-native-maps';



export default function LinksScreen() {
  return (
    <View style={styles.container}>
        <MapView 
            style={styles.map} 
            initialRegion={{
                latitude: 14.599512,
                longitude: 120.98422, 
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} 
        />
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
