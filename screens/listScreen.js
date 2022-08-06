import React from 'react';
import { View } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedLink from '../components/ThemedLink/index';

const ListScreen = ({ navigation, route }) => {
  const { date, nearEarthObjects } = route.params;

  const number = nearEarthObjects.length;

  return (
    <View style={theme.container}>
      <ThemedHeader text={`We found ${number} NEO${number > 1 ? 's' : ''} for ${date}:`} />
      {nearEarthObjects && nearEarthObjects.map((neo, index) => (
        <ThemedLink key={`neo-ref-link-${index}`} text={`NEO Reference ID: ${neo['neo_reference_id']}`} onPressLink={() => navigation.push('DetailScreen', { screen: 'DetailScreen', date: date, nearEarthObject: neo })} />
      ))}
    </View>
  );
}

export default ListScreen;