// @flow

import * as StyleSheet from 'react-native/Libraries/StyleSheet/StyleSheet';

import colors from '../../Colors';

const styles = {
  container: (darkTheme: boolean): StyleSheet.ViewStyle => ({
    borderColor: darkTheme ? colors.darkHeavyGray : colors.lightHeavyGray,
    borderBottomWidth: 3,
  }),
  text: (darkTheme: boolean): StyleSheet.TextStyle => ({
    fontSize: 20,
    fontWeight: 'bold',
    color: darkTheme ? colors.lightMediumGray : colors.blackPrimary,
  }),
};

export default styles;
