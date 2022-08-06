import React, {useState} from 'react';
import { View } from 'react-native';
import { theme } from '../styles/stylesheet';
import ThemedHeader from '../components/ThemedHeader/index';
import ThemedButton from '../components/ThemedButton/index';

// Use newer DatePicker as recommended by expo and React Native, rather than react-natives DatePickerIOS
// Which is being deprecated and does not support android.
// import DateTimePicker from '@react-native-community/datetimepicker';

const FindScreen = ({ navigation }) => {
  const [date, setDate] = useState('2022-08-01');

  // stub in test data for now
  const testData = {"links":{"next":"http://www.neowsapp.com/rest/v1/feed?start_date=2022-08-02&end_date=2022-08-02&detailed=false&api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF","prev":"http://www.neowsapp.com/rest/v1/feed?start_date=2022-07-31&end_date=2022-07-31&detailed=false&api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF","self":"http://www.neowsapp.com/rest/v1/feed?start_date=2022-08-01&end_date=2022-08-01&detailed=false&api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF"},"element_count":4,"near_earth_objects":{"2022-08-01":[{"links":{"self":"http://www.neowsapp.com/rest/v1/neo/3645382?api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF"},"id":"3645382","neo_reference_id":"3645382","name":"(2013 PS13)","nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3645382","absolute_magnitude_h":27.2,"estimated_diameter":{"kilometers":{"estimated_diameter_min":0.0096506147,"estimated_diameter_max":0.0215794305},"meters":{"estimated_diameter_min":9.6506146958,"estimated_diameter_max":21.5794304844},"miles":{"estimated_diameter_min":0.0059966121,"estimated_diameter_max":0.0134088323},"feet":{"estimated_diameter_min":31.6621227185,"estimated_diameter_max":70.7986587106}},"is_potentially_hazardous_asteroid":false,"close_approach_data":[{"close_approach_date":"2022-08-01","close_approach_date_full":"2022-Aug-01 16:51","epoch_date_close_approach":1659372660000,"relative_velocity":{"kilometers_per_second":"21.5613192824","kilometers_per_hour":"77620.7494167275","miles_per_hour":"48230.5151028549"},"miss_distance":{"astronomical":"0.1468796271","lunar":"57.1361749419","kilometers":"21972879.360554277","miles":"13653314.1220599426"},"orbiting_body":"Earth"}],"is_sentry_object":false},{"links":{"self":"http://www.neowsapp.com/rest/v1/neo/3838930?api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF"},"id":"3838930","neo_reference_id":"3838930","name":"(2019 EA2)","nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3838930","absolute_magnitude_h":25.8,"estimated_diameter":{"kilometers":{"estimated_diameter_min":0.0183888672,"estimated_diameter_max":0.0411187571},"meters":{"estimated_diameter_min":18.388867207,"estimated_diameter_max":41.1187571041},"miles":{"estimated_diameter_min":0.0114263088,"estimated_diameter_max":0.0255500032},"feet":{"estimated_diameter_min":60.3309310875,"estimated_diameter_max":134.9040630575}},"is_potentially_hazardous_asteroid":false,"close_approach_data":[{"close_approach_date":"2022-08-01","close_approach_date_full":"2022-Aug-01 21:28","epoch_date_close_approach":1659389280000,"relative_velocity":{"kilometers_per_second":"9.7081047099","kilometers_per_hour":"34949.1769555945","miles_per_hour":"21716.059425547"},"miss_distance":{"astronomical":"0.3299251028","lunar":"128.3408649892","kilometers":"49356092.638411036","miles":"30668453.8504068568"},"orbiting_body":"Earth"}],"is_sentry_object":false},{"links":{"self":"http://www.neowsapp.com/rest/v1/neo/3843572?api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF"},"id":"3843572","neo_reference_id":"3843572","name":"(2019 QG)","nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=3843572","absolute_magnitude_h":21.7,"estimated_diameter":{"kilometers":{"estimated_diameter_min":0.1214940408,"estimated_diameter_max":0.2716689341},"meters":{"estimated_diameter_min":121.4940407996,"estimated_diameter_max":271.6689340891},"miles":{"estimated_diameter_min":0.0754928736,"estimated_diameter_max":0.1688071972},"feet":{"estimated_diameter_min":398.6025088171,"estimated_diameter_max":891.3023057169}},"is_potentially_hazardous_asteroid":true,"close_approach_data":[{"close_approach_date":"2022-08-01","close_approach_date_full":"2022-Aug-01 21:30","epoch_date_close_approach":1659389400000,"relative_velocity":{"kilometers_per_second":"7.0517621611","kilometers_per_hour":"25386.3437800412","miles_per_hour":"15774.086778215"},"miss_distance":{"astronomical":"0.1707517458","lunar":"66.4224291162","kilometers":"25544097.470461446","miles":"15872366.1567461148"},"orbiting_body":"Earth"}],"is_sentry_object":false},{"links":{"self":"http://www.neowsapp.com/rest/v1/neo/54050999?api_key=2zcSAHeiiktxliyCHz2eVVzGfUpwPsFqTX97WquF"},"id":"54050999","neo_reference_id":"54050999","name":"(2020 PP1)","nasa_jpl_url":"http://ssd.jpl.nasa.gov/sbdb.cgi?sstr=54050999","absolute_magnitude_h":26.63,"estimated_diameter":{"kilometers":{"estimated_diameter_min":0.0125474356,"estimated_diameter_max":0.028056919},"meters":{"estimated_diameter_min":12.5474356368,"estimated_diameter_max":28.0569190272},"miles":{"estimated_diameter_min":0.0077966126,"estimated_diameter_max":0.0174337558},"feet":{"estimated_diameter_min":41.1661287346,"estimated_diameter_max":92.0502622211}},"is_potentially_hazardous_asteroid":false,"close_approach_data":[{"close_approach_date":"2022-08-01","close_approach_date_full":"2022-Aug-01 16:58","epoch_date_close_approach":1659373080000,"relative_velocity":{"kilometers_per_second":"3.7151719212","kilometers_per_hour":"13374.6189164402","miles_per_hour":"8310.468070607"},"miss_distance":{"astronomical":"0.0335874617","lunar":"13.0655226013","kilometers":"5024612.729026579","miles":"3122149.5738176302"},"orbiting_body":"Earth"}],"is_sentry_object":false}]}};

  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate;
  //   setDate(currentDate);
  // };

  const onFind = () => {
    navigation.push('ListScreen', { screen: 'ListScreen', date: date, nearEarthObjects: testData['near_earth_objects'][date] })
  }

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
        onPressButton={() => onFind()}
      />
    </View>
  );
}

export default FindScreen;