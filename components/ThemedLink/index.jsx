import React from 'react';
import { Pressable, Text } from 'react-native';
import { theme } from '../../styles/stylesheet.js';

const ThemedLink = ({ text, onPressLink }) => {
  return (
    <Pressable style={({ pressed }) => [
        pressed
          ? theme.linkPressed
          : theme.link
      ]}
      onPress={onPressLink}
    >
      <Text style={theme.linkText}>{text}</Text>
    </Pressable>
  );
}

export default ThemedLink;
