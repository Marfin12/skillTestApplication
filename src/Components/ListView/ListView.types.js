// @flow
import type {
  ViewStyleProp
} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type Item = {|
  name: string,
  description: string,
  image: string
|};

export type Props = {|
  headerList: () => void,
  isFetchingFirst: boolean,
  emptyList: () => void,
  color: string,
  style: ViewStyleProp,
  navigation: () => void,
  itemList: (Item, Function) => null,
  item: Array<Item>
|};
