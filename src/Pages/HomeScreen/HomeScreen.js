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

const _renderHeader = () => <HeaderList>List View Header</HeaderList>;

const _renderItemContent = (name, description) => (
  <View style={styles.containerText}>
    <TextField textStyle={styles.title}> {name} </TextField>
    <TextField numberOfLines={3} style={styles.description}>
    {' '}
      {description}{' '}
    </TextField>
  </View>
);

export const _renderItem = (props, navigation) => {
  const { name, description, image } = props;

  return (
    <Card
      onPress={navigateToDetailScreen(navigation, props)}>
        <Image source={{uri: image}} style={styles.photo} />
        {_renderItemContent(name, description)}
    </Card>
  );
};

const _renderEmpty = () => (
  <TextField style={styles.emptyList} textStyle={styles.description}>
    The list data is empty
  </TextField>
);

const HomeScreen = props => {
  return (
  <React.Fragment>
    <ListView
      style={styles.listView}
      item={props.data.sports}
      navigation={props.navigation}
      itemList={_renderItem}
      emptyList={_renderEmpty}
      headerList={_renderHeader}
    />
  </React.Fragment>
);
  };

export default compose(graphql(getSportList))(HomeScreen);
