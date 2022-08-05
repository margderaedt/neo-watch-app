import React from 'react';
import { View, ImageBackground } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';
import WelcomeScreenBackground from '../assets/welcome-screen-background.jpg';

const WelcomeScreen = () => {
  return (
    <View style={theme.welcomeLayout}>
      <ImageBackground source={WelcomeScreenBackground} style={theme.welcomeLayoutImage}>
        <ThemedHeader text={'Hello Stargazer!'} />
        <ThemedButton
          text={'Get Started'}
          onPressButton={() => console.log('Pressed button.')}
        />
      </ImageBackground>
    </View>
  );
}

export default WelcomeScreen;