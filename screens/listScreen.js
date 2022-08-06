import React, {useEffect, useState} from 'react';
import { View } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedLink from '../components/ThemedLink/index';
import ThemedText from '../components/ThemedText/index';
import { NASA_API_URL, NASA_API_KEY } from '@env'

const ListScreen = ({ navigation, route }) => {
  const { date } = route.params;
  let [nearEarthObjects, setNearEarthObjects] = useState(null)
  const apiUrl = `${NASA_API_URL}?start_date=${date}&end_date=${date}&api_key=${NASA_API_KEY}`;

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => setNearEarthObjects(data['near_earth_objects'][date]))
  },[])

  return (
    <View style={theme.container}>
      {nearEarthObjects &&
        <>
          <ThemedHeader text={`We found ${nearEarthObjects.length} NEO${nearEarthObjects.length > 1 ? 's' : ''} for ${date}!`} />
          <ThemedText text={'Select an object below.'} />
          { nearEarthObjects.map((neo, index) => (
            <ThemedLink key={`neo-ref-link-${index}`} text={`NEO Reference ID: ${neo['neo_reference_id']}`} onPressLink={() => navigation.push('DetailScreen', { screen: 'DetailScreen', date: date, nearEarthObject: neo })} />
          ))}
        </>
      }
    </View>
  );
}

export default ListScreen;