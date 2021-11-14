// @flow

import * as React from 'react';
import { View, FlatList } from 'react-native';

import styles from './ListView.styles';
import config from './ListView.config';
import type { Props } from './ListView.types';

const ListView = (props: Props): React.Node => (
  <View style={[styles.container, props.style]}>
    <FlatList
      contentContainerStyle={styles.contentContainer}
      data={props.item}
      renderItem={({ item }) => props.itemList(item, props.navigation)}
      ListEmptyComponent={props.emptyList()}
      ListHeaderComponent={props.headerList()}
    />
  </View>
);

ListView.displayName = config.displayName;
ListView.defaultProps = config.defaultProps;

export default ListView;
