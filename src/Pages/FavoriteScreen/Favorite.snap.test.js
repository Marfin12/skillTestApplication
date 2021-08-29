import React from 'react';
import renderer from 'react-test-renderer';
import FavoriteScreen from './FavoriteScreen';

test('renders correctly', () => {
  const tree = renderer.create(<FavoriteScreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
