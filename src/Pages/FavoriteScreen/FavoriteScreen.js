import * as React from 'react';
import { View } from 'react-native';

import TextField from '../../Components/TextField';

import styles from './FavoriteScreen.styles';

const FavoriteScreen = () => (
  <View style={styles.container}>
    <TextField> Favorite Screen </TextField>
  </View>
);

export default FavoriteScreen;
