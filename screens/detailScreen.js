import React from 'react';
import { ScrollView, ImageBackground, View, Text } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';
import WelcomeScreenBackground from '../assets/welcome-screen-background.jpg';

const DetailScreen = ({ navigation, route }) => {
  const { nearEarthObject } = route.params;

  const potentiallyHazardousText = nearEarthObject['is_potentially_hazardous_asteroid'] ? 'Yes' : 'No';

  return (
    <ScrollView contentContainerStyle={theme.container}>
      <ImageBackground source={WelcomeScreenBackground} style={theme.homeScreenImage}>
        <ThemedHeader text={`GET TO KNOW NEO ${nearEarthObject['name']}!`} />
        <View style={theme.infoContainer}>
          <Text style={theme.keyText}>Name:</Text>
          <Text style={theme.valueText}>{nearEarthObject['name']}</Text>
        </View>
        <View style={theme.infoContainer}>
          <Text style={theme.keyText}>Diameter (in feet):</Text>
          <Text style={theme.valueText}>min({nearEarthObject['estimated_diameter']['feet']['estimated_diameter_min']})</Text>
          <Text style={theme.valueText}>max({nearEarthObject['estimated_diameter']['feet']['estimated_diameter_max']})</Text>
        </View>
        <View style={theme.infoContainer}>
          <Text style={theme.keyText}>Miss Distance (in miles)</Text>
          <Text style={theme.valueText}>{nearEarthObject['close_approach_data'][0]['miss_distance']['miles']}</Text>
        </View>
        <View style={theme.infoContainer}>
          <Text style={theme.keyText}>Speed (in MPH)</Text>
          <Text style={theme.valueText}>{nearEarthObject['close_approach_data'][0]['relative_velocity']['miles_per_hour']}</Text>
        </View>
        <View style={theme.infoContainer}>
          <Text style={theme.keyText}>Potentially Hazardous?</Text>
          <Text style={nearEarthObject['is_potentially_hazardous_asteroid']
              ? theme.warningText
              : theme.successText
            }
          >
            {potentiallyHazardousText}
          </Text>
        </View>
        <ThemedButton
          text={'Back to List'}
          onPressButton={() => navigation.goBack()}
        />
        <ThemedButton
          text={'Select A New Date'}
          onPressButton={() => navigation.push('FindScreen', { screen: 'FindScreen' })}
        />
      </ImageBackground>
    </ScrollView>
  );
}

export default DetailScreen;