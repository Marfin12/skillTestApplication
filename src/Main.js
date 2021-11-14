// @flow

import * as React from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import * as themeActions from './Redux/Actions/action';
import Constants from './Constants';
import { HomeScreen, DetailsScreen, FavoriteScreen } from './Pages';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackScreen = (): React.Node => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen
      name="Details"
      component={DetailsScreen}
      options={({ route }) => ({ title: route.params.props.name })}
    />
  </Stack.Navigator>
);

const Main = (): React.Node => {
  const { DARK_THEME, LIGHT_THEME } = Constants.THEME;
  const colorScheme = useColorScheme() === 'dark' ? DarkTheme : DefaultTheme;
  const globalTheme = colorScheme === DarkTheme ? DARK_THEME : LIGHT_THEME;

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(themeActions.ToggleTheme(globalTheme));
  }, [colorScheme]);

  return (
    <NavigationContainer theme={colorScheme}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={StackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Favorite" component={FavoriteScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
