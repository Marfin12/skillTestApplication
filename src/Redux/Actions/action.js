// @flow

import Constants from '../../Constants';
import type { ActionTheme } from './action.types';

const { DARK_THEME, LIGHT_THEME } = Constants.THEME;

export const ToggleDarkTheme = (): ActionTheme => ({
  type: DARK_THEME,
  payload: {
    theme: true,
  },
});
export const ToggleLightTheme = (): ActionTheme => ({
  type: LIGHT_THEME,
  payload: {
    theme: false,
  },
});
export const ToggleTheme = (theme: string): Function => (dispatch: Function) => {
  if (theme === DARK_THEME) {
    dispatch(ToggleDarkTheme());
  } else {
    dispatch(ToggleLightTheme());
  }
};
