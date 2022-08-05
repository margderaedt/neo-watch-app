import React from 'react';
import { View } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';

const DetailScreen = ({ navigation }) => {
  return (
    <View style={theme.container}>
      <ThemedHeader text={'Enter a date to find NEOs detected by NASA'} />
      <ThemedButton
        text={'Find NEOs!'}
        // onPressButton={() => navigation.push('WatchScreen', { screen: 'WatchScreen' })}
      />
    </View>
  );
}

export default DetailScreen;