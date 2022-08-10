import React, {useEffect, useState} from 'react';
import { NASA_API_URL, NASA_API_KEY } from '@env';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedButton from '../components/ThemedButton/index';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedLink from '../components/ThemedLink/index';
import ThemedText from '../components/ThemedText/index';

const ErrorView = () => (
  <>
    <ThemedHeader text={'Something went wrong...'} />
    <ThemedText text={'Please refresh the app or try again later.'} />
  </>
);

const LoadingView = () => <ThemedHeader text={'Loading...'} />;

const ListScreen = ({ navigation, route }) => {
  const [nearEarthObjects, setNearEarthObjects] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { date } = route.params;
  const apiUrl = `${NASA_API_URL}?start_date=${date}&end_date=${date}&api_key=${NASA_API_KEY}`;

  useEffect(() => {
    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      setNearEarthObjects(data['near_earth_objects'][date])
    })
    .catch((error) => { setError(error)})
  },[]);

  return (
    <View style={theme.container} onStartShouldSetResponder={() => true}>
      <ScrollView contentContainerStyle={theme.scrollContainer}>
        <TouchableOpacity activeOpacity={1}>
          {error && <ErrorView />}
          {loading && <LoadingView />}
          {(nearEarthObjects && !error) &&
            <>
              <ThemedHeader text={`We found ${nearEarthObjects.length} NEO${nearEarthObjects.length === 1 ? '' : 's'} for ${date}!`} />
              <ThemedText text={'Select an object below for more information.'} />
              {nearEarthObjects.map((neo, index) => (
                <ThemedLink key={`neo-ref-link-${index}`} text={`NEO Reference ID: ${neo['neo_reference_id']}`} onPressLink={() => navigation.push('DetailScreen', { screen: 'DetailScreen', neoReferenceId: neo['neo_reference_id'], nearEarthObject: neo })} />
              ))}
              <ThemedButton
                text={'Select A New Date'}
                onPressButton={() => navigation.push('FindScreen', { screen: 'FindScreen' })}
              />
              <ThemedButton
                text={'Back to Home'}
                onPressButton={() => navigation.push('WelcomeScreen')}
              />
            </>
          }
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default ListScreen;