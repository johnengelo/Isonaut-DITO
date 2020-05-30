import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';

HomeScreen.navigationOptions = {
  header: null,
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/DITO.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.headerBold}>
            Right Place, Right Time, Right Now.
          </Text>
          <Text style={styles.bodyText}>
          Welcome to DITO, your one-stop app for locating the safest place to travel to with the use of Artificial Intelligence.{"\n"}
          </Text>
          <Text style={[styles.bodyText, styles.paraBold]}>Get started with Map View</Text>
          <Image style={styles.userType} source={require('../assets/images/banner_civilian.png')} />
          <Image style={styles.userType} source={require('../assets/images/banner_enforcer.png')} />
          <Image style={styles.userType} source={require('../assets/images/banner_cargo.png')} />
        </View>
      </ScrollView>
    </View>
  );
}




function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151624',
  },
  contentContainer: {
    paddingTop: 60,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 300,
    height: 130,
    resizeMode: 'contain',
    marginLeft: '-15%',
    marginTop: 3,
  },
  userType: {
    width: 220,
    height: 100,
    marginBottom: '-10%',
    resizeMode: 'contain',
  },
  paraBold: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  headerBold: {
    fontSize: 34,
    fontWeight: 'bold',
    marginLeft: -20,
    color: '#05B2DA',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  bodyText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#fff',
    lineHeight: 22,
    textAlign: 'justify',
    marginLeft: -20,
    marginTop: 5,
  },
  linkText: {
    fontSize: 18,
    color: '#DCA416',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
