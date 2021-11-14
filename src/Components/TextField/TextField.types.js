// @flow

import * as React from 'react';
import type {
  ViewStyleProp,
  TextStyleProp,
} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type Props = {|
  style: ViewStyleProp,
  textStyle: TextStyleProp,
  darkThemeColor: string,
  defaultThemeColor: string,
  numberOfLines: number,
  children: React.Node
|};
