import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert } from 'react-native';
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
                ? require('../assets/images/DITO_icon.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <Text style={styles.headerBold}>
            Login to Continue
          </Text>
          <Text style={styles.fieldTitle}>Username</Text>
          <TextInput style={{ height: 45, width: '100%', borderRadius: 25, borderColor: 'white', borderWidth: 0.5, backgroundColor: 'white' }}></TextInput>
          <Text style={styles.fieldTitle}>Password</Text>
          <TextInput style={{ height: 45, width: '100%', borderRadius: 25, borderColor: 'white', borderWidth: 0.5, backgroundColor: 'white' }}></TextInput>
          <TouchableOpacity style={{ borderRadius: 25,width: 200, height: 45, marginTop: 20, paddingTop: 5, backgroundColor: '#05B2DA', alignContent: 'center', alignItems: 'center' }} onPress={() => Alert.alert('Logged-in successfully.')}>
              <Text style={styles.paraBold}>Login</Text>
              </TouchableOpacity>
          
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
    height: 150,
    resizeMode: 'contain',
    marginTop: 3,
  },
  userType: {
    width: 220,
    height: 100,
    marginBottom: '-10%',
    borderRadius: 25,
    resizeMode: 'contain',
  },
  paraBold: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff'
  },
  fieldTitle: {
      fontSize: 16,
      color: "#fff",
      paddingTop: 15,
      paddingBottom: 5,
  },
  headerBold: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#05B2DA',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
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
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#fff',
    lineHeight: 22,
    textAlign: 'center',
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
