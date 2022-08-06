import React, {useEffect, useState} from 'react';
import { ScrollView } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedLink from '../components/ThemedLink/index';
import ThemedText from '../components/ThemedText/index';
import { NASA_API_URL, NASA_API_KEY } from '@env'

const ListScreen = ({ navigation, route }) => {
  const [nearEarthObjects, setNearEarthObjects] = useState(null);
  const [error, setError] = useState(null);
  const { date } = route.params;
  const apiUrl = `${NASA_API_URL}?start_date=${date}&end_date=${date}&api_key=${NASA_API_KEY}`;

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => setNearEarthObjects(data['near_earth_objects'][date]))
    .catch((error) => { setError(error)})
  },[])

  return (
    <ScrollView contentContainerStyle={theme.container}>
      {(nearEarthObjects && !error) &&
        <>
          <ThemedHeader text={`We found ${nearEarthObjects.length} NEO${nearEarthObjects.length > 1 ? 's' : ''} for ${date}!`} />
          <ThemedText text={'Select an object below.'} />
          {nearEarthObjects.map((neo, index) => (
            <ThemedLink key={`neo-ref-link-${index}`} text={`NEO Reference ID: ${neo['neo_reference_id']}`} onPressLink={() => navigation.push('DetailScreen', { screen: 'DetailScreen', date: date, nearEarthObject: neo })} />
          ))}
        </>
      }
      {error &&
        <>
          <ThemedHeader text={'Something went wrong...'} />
          <ThemedText text={'Please refresh the app or try again later.'} />
        </>
      }
    </ScrollView>
  );
}

export default ListScreen;