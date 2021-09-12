import * as React from 'react';
import { View, Image } from 'react-native';

import TextField from '../../Components/TextField';

import styles from './DetailsScreen.styles';

/* eslint-disable react/destructuring-assignment */
const DetailsScreen = (props) => {
  const data = props.route.params.props;

  return (
    <View style={styles.container}>
      <Image source={{ uri: data.image }} style={styles.photo} />
      <TextField style={styles.description}>
        {data.description}
      </TextField>
    </View>
  );
};

export default DetailsScreen;
