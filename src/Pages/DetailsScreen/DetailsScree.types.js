import * as React from 'react';
import { Image, ScrollView } from 'react-native';

import TextField from '../../Components/TextField';

import styles from './DetailsScreen.styles';

const DetailsScreen = (props) => {
  const data = props.route.params.props;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.containerScroll}>
      <Image source={{ uri: data.image }} style={styles.photo} />
      <TextField style={styles.description}>
        {data.description}
      </TextField>
    </ScrollView>
  );
};

export default DetailsScreen;
