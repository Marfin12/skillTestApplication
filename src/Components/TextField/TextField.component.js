import * as React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './TextField.styles';
import config from './TextField.config';

const TextField = props => {
  const getSelect = useSelector(({themeReducer}) => themeReducer);
  const theme = getSelect.theme;
  const {darkThemeColor, defaultThemeColor, style, textStyle, children} = props;

  return (
    <View style={style}>
      <Text
        numberOfLines={props.numberOfLines}
        style={[
          styles.text(theme, darkThemeColor, defaultThemeColor),
          textStyle,
        ]}>
        {children}
      </Text>
    </View>
  );
};

TextField.displayName = config.displayName;
TextField.defaultProps = config.defaultProps;

export default TextField;
