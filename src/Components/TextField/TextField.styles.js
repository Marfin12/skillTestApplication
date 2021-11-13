// @flow

import * as StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';

const styles = {
  text: (darkTheme: boolean, darkMode: string, whiteMode: string): StyleSheet.TextStyle => ({
    color: darkTheme ? darkMode : whiteMode,
  }),
};

export default styles;
