// @flow

import * as React from 'react';

import type { Props } from './TextField.types';

const defaultProps: Props = {
  style: {},
  textStyle: {},
  darkThemeColor: '#FFF',
  defaultThemeColor: '#111',
  numberOfLines: 0,
  children: <React.Fragment />
};

const displayName = 'TextField';

export default {
  defaultProps,
  displayName,
};
