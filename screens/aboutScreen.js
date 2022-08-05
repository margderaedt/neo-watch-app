import React from 'react';
import { View, ImageBackground, Linking, Text } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';
import ThemedText from '../components/ThemedText/index';
import WelcomeScreenBackground from '../assets/welcome-screen-background.jpg';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={theme.layout}>
      <ImageBackground source={WelcomeScreenBackground} style={theme.homeScreenImage}>
      <ThemedHeader text={`What Are Near Earth Objects?`} />
        <View>
          <ThemedText text={`A NEO is an asteroid or comet that finds itself in Earth's orbit. We can learn a lot about our solar system by studying them. By visting`} />
          <Text
            style={{color: 'blue', textAlign: 'left'}}
            onPress={() => Linking.openURL('https://cneos.jpl.nasa.gov/')}>
            Center For Near Earth Object Studies
          </Text>
          <ThemedText text={`you can learn a lot more about these fascinating space debris.`}/>
          <ThemedText text={`In this app, you can search for NEOs by date, with up-to-date information about them provided by NASA.`} />
        </View>

        <ThemedButton
          text={'Back to Home'}
          onPressButton={() => navigation.push('WelcomeScreen')}
        />
      </ImageBackground>
    </View>
  );
}

export default AboutScreen;