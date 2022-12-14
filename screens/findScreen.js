import React, { useState } from 'react';
import { theme } from '../styles/stylesheet';
import { View, ImageBackground } from 'react-native';
import ThemedButton from '../components/ThemedButton/index';
import ThemedHeader from '../components/ThemedHeader/index';
import WelcomeScreenBackground from '../assets/welcome-screen-background.jpg';

// Use newer DatePicker as recommended by expo and React Native, rather than react-natives DatePickerIOS
// Which is being deprecated and does not support android.
import DateTimePicker from '@react-native-community/datetimepicker';

const FindScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedValue) => {
    const currentDate = selectedValue || new Date();
    setDate(currentDate);
  };

  const onFind = () => {
    navigation.push('ListScreen', { screen: 'ListScreen', date: date.toLocaleDateString('en-ca') })
  }

  return (
    <View style={theme.container}>
      <ImageBackground source={WelcomeScreenBackground} style={theme.homeScreenImage}>
        <ThemedHeader text={'Enter a date below to find NEOs detected by NASA:'} />
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            onChange={onChange}
            show={true}
            display='default'
            locale='en-CA' // Use Canadian English locale for YYYY-MM-DD date display formatting
            style={theme.datePickerStyle}
          />
        <ThemedButton
          text={'Find NEOs!'}
          onPressButton={() => onFind()}
        />
      </ImageBackground>
    </View>
  );
}

export default FindScreen;