import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { theme } from './styles/stylesheet.js';
import WelcomeScreen from './pages/welcomeScreen';

export default function App() {
  return (
    <WelcomeScreen />
  );
}
