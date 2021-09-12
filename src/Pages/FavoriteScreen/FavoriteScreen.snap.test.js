import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteScreen from './FavoriteScreen';

jest.mock('react-redux', () => {
  const ActualReactRedux = jest.requireActual('react-redux');
  const lightMode = {
    theme: false,
  };
  const darkMode = {
    theme: true,
  };
  return {
    ...ActualReactRedux,
    useSelector: jest
      .fn()
      .mockImplementationOnce(() => lightMode)
      .mockImplementationOnce(() => darkMode),
  };
});
jest.mock('../../Components/TextField', () => 'TextField');

test('renders favorite screen light mode', () => {
  const ScreenWrapper = renderer
    .create(<FavoriteScreen />)
    .toJSON();
  expect(ScreenWrapper).toMatchSnapshot();
});

test('renders favorite screen dark mode', () => {
  const ScreenWrapper = renderer
    .create(<FavoriteScreen />)
    .toJSON();
  expect(ScreenWrapper).toMatchSnapshot();
});
