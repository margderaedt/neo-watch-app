import React from 'react';
import { View } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';

const DetailScreen = ({ navigation, route }) => {
  const { date, nearEarthObject } = route.params;

  return (
    <View style={theme.container}>
      <ThemedHeader text={nearEarthObject['neo_reference_id']} />
      <ThemedButton
        text={'Find NEOs!'}
        // onPressButton={() => navigation.push('WatchScreen', { screen: 'WatchScreen' })}
      />
    </View>
  );
}

export default DetailScreen;