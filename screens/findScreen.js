import React, {useState} from 'react';
import { View } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';

// Use newer DatePicker as recommended by expo and React Native, rather than react-natives DatePickerIOS
// Which is being deprecated and does not support android.
// import DateTimePicker from '@react-native-community/datetimepicker';

const FindScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <View style={theme.container}>
      <ThemedHeader text={'Enter a date below to find NEOs detected by NASA:'} />
        {/* <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          onChange={onChange}
        /> */}
      <ThemedButton
        text={'Find NEOs!'}
        // onPressButton={() => navigation.push('WatchScreen', { screen: 'WatchScreen' })}
      />
    </View>
  );
}

export default FindScreen;