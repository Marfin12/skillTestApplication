// @flow

import * as React from 'react';
import type {
  ViewStyleProp
} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type Props = {|
  children: React.Node,
  style: ViewStyleProp,
  onPress: () => void
|};
