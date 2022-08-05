import React from 'react';
import { Text } from 'react-native';
import { theme } from '../../styles/stylesheet.js';

const ThemedHeader = ({ text }) => {
  return (
    <Text style={theme.header}>
      {text}
    </Text>
  );
}

export default ThemedHeader;