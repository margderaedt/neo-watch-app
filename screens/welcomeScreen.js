import React from 'react';
import { View, ImageBackground } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';
import WelcomeScreenBackground from '../assets/welcome-screen-background.jpg';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={theme.layout}>
      <ImageBackground source={WelcomeScreenBackground} style={theme.homeScreenImage}>
        <ThemedHeader text={'Hello Stargazer!'} />
        <ThemedButton
          text={'Get Started'}
          onPressButton={() => navigation.push('FindScreen', { screen: 'FindScreen' })}
        />
        <ThemedButton
          text={'About NEOs'}
          onPressButton={() => navigation.push('AboutScreen', { screen: 'AboutScreen' })}
        />
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;