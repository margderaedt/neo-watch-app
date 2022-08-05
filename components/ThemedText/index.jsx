import React from 'react';
import { Text } from 'react-native';
import { theme } from '../../styles/stylesheet.js';

const ThemedText = ({ text }) => {
  return (
    <Text style={theme.text}>
      {text}
    </Text>
  );
}

export default ThemedText;