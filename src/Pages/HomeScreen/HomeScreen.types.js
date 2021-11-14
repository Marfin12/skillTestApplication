// @flow

import type {
  ViewStyleProp
} from 'react-native/Libraries/StyleSheet/StyleSheet';

import Constants from '../../Constants';

export type Item = {|
  name: string,
  description: string,
  image: string
|};

export type Data = {|
  sports: Item
|};

export type Props = {|
  data: Data,
  navigation: () => void
|};
