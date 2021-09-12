export const ToggleDarkTheme = () => ({
  type: 'DARK_THEME',
});
export const ToggleLightTheme = () => ({
  type: 'LIGHT_THEME',
});
export const ToggleTheme = (theme) => async (dispatch) => {
  if (theme === 'DARK_THEME') {
    dispatch(ToggleDarkTheme());
  } else {
    dispatch(ToggleLightTheme());
  }
};
