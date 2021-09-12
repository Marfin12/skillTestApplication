import * as React from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as themeActions from './Redux/Actions/action';
import Constants from './Constants';
import { HomeScreen, DetailsScreen } from './Pages';

const Stack = createNativeStackNavigator();

const Main = () => {
  const { DARK_THEME, LIGHT_THEME } = Constants.THEME;
  const colorScheme = useColorScheme() === 'dark' ? DarkTheme : DefaultTheme;
  const globalTheme = colorScheme === DarkTheme ? DARK_THEME : LIGHT_THEME;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(themeActions.ToggleTheme(globalTheme));
  }, []);

  return (
    <NavigationContainer theme={colorScheme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.props.name })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
