// @flow

import Constants from '../../Constants';
import type { Action, ReducerProps } from './reducer.types';

const { DARK_THEME, LIGHT_THEME } = Constants.THEME;
const initialState = false;

export default (theme: boolean = initialState, action: Action): ReducerProps => {
  switch (action.type) {
    case DARK_THEME:
      return { theme: true };
    case LIGHT_THEME:
      return { theme: false };
    default:
      return { theme };
  }
};
