// @flow

import * as React from 'react';
import { View, Image } from 'react-native';
import { graphql, compose } from 'react-apollo';

import { getSportList } from '../../Graphql/sport.graphql';

import Card from '../../Components/Card';
import ListView from '../../Components/ListView';
import HeaderList from '../../Components/HeaderList';
import TextField from '../../Components/TextField';
import type { Props, Item } from './HomeScreen.types';

import styles from './HomeScreen.styles';
import { navigateToDetailScreen } from './HomeScreen.utils';

const renderHeader = (): React.Node => <HeaderList>List View Header</HeaderList>;

const renderItemContent = (name: string, description: string): React.Node => (
  <View style={styles.containerText}>
    <TextField textStyle={styles.title}>
      {name}
    </TextField>
    <TextField numberOfLines={3} style={styles.description}>
      {description}
    </TextField>
  </View>
);

export const renderItem = (item: Item, navigation: () => void): React.Node => {
  const { name, description, image } = item;

  return (
    <Card
      onPress={navigateToDetailScreen(navigation, item)}
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

const HomeScreen = (props: Props): React.Node => (
  <React.Fragment>
    <ListView
      style={styles.listView}
      item={props.data.sports}
      navigation={props.navigation}
      itemList={renderItem}
      emptyList={renderEmpty}
      headerList={renderHeader}
    />
  </React.Fragment>
);

export default (compose(graphql(getSportList))(HomeScreen): React.AbstractComponent<Props>);
