import * as React from 'react';
import { View, Image } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { getSportList } from '../../Graphql/sport.graphql';

import Card from '../../Components/Card';
import ListView from '../../Components/ListView';
import HeaderList from '../../Components/HeaderList';
import TextField from '../../Components/TextField';

import styles from './HomeScreen.styles';
import { navigateToDetailScreen } from './HomeScreen.utils';

const renderHeader = () => <HeaderList>List View Header</HeaderList>;

const renderItemContent = (name, description) => (
  <View style={styles.containerText}>
    <TextField textStyle={styles.title}>
      {name}
    </TextField>
    <TextField numberOfLines={3} style={styles.description}>
      {description}
    </TextField>
  </View>
);

export const renderItem = (props, navigation) => {
  const { name, description, image } = props;

  return (
    <Card
      onPress={navigateToDetailScreen(navigation, props)}
    >
      <Image source={{ uri: image }} style={styles.photo} />
      {renderItemContent(name, description)}
    </Card>
  );
};

const renderEmpty = () => (
  <TextField style={styles.emptyList} textStyle={styles.description}>
    The list data is empty
  </TextField>
);

const HomeScreen = (props) => (
  <>
    <ListView
      style={styles.listView}
      item={props.data.sports}
      navigation={props.navigation}
      itemList={renderItem}
      emptyList={renderEmpty}
      headerList={renderHeader}
    />
  </>
);

export default compose(graphql(getSportList))(HomeScreen);
