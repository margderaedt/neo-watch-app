import React from 'react';
import { Pressable, Text } from 'react-native';
import { theme } from '../../styles/stylesheet.js';

const ThemedButton = ({ text, onPressButton }) => {
  return (
    <Pressable style={({ pressed }) => [
        pressed
          ? theme.buttonPressed
          : theme.button
      ]}
      onPress={onPressButton}
    >
      <Text style={theme.buttonText}>{text}</Text>
    </Pressable>
  );
}

export default ThemedButton;
