import React, { useState } from 'react';
import { View } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';

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
      <ThemedHeader text={'Enter a date below to find NEOs detected by NASA:'} />
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          onChange={onChange}
          show={true}
          display='default'
          locale='en-CA' // Use Canadian English locale for YYYY-MM-DD date display formatting
          style={{width: 120, marginBottom: 16, backgroundColor: "white"}}
        />
      <ThemedButton
        text={'Find NEOs!'}
        onPressButton={() => onFind()}
      />
    </View>
  );
}

export default FindScreen;