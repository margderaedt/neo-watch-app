import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/welcomeScreen';
import AboutScreen from './screens/aboutScreen';
import FindScreen from './screens/findScreen';
import ListScreen from './screens/listScreen';
import DetailScreen from './screens/detailScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ title: 'NEO Watch 3000' }}
        />
        <Stack.Screen
          name="AboutScreen"
          component={AboutScreen}
          options={{ title: 'About NEOs' }}
        />
        <Stack.Screen
          name="FindScreen"
          component={FindScreen}
          options={{ title: 'Find NEOs' }}
        />
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={({ route }) => ({ title: `${route.params.date} NEOs`, date: route.params.date })}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={({ route }) => ({ title: `NEO: ${route.params.neoReferenceId}`, nearEarthObject: route.params.nearEarthObject })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
