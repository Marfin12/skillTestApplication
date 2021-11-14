// @flow

import Constants from '../../Constants';

import type { Props, Item } from './ListView.types';

const defaultItem: Item = {
  name: '',
  description: '',
  image: ''
}

const defaultProps: Props = {
  headerList: Constants.UTILS.EMPTY_FUNCTION,
  isFetchingFirst: true,
  emptyList: Constants.UTILS.EMPTY_FUNCTION,
  color: 'black',
  style: {},
  navigation: Constants.UTILS.EMPTY_FUNCTION,
  itemList: Constants.UTILS.EMPTY_FUNCTION,
  item: [defaultItem]
};

const displayName = 'ListView';

export default {
  defaultProps,
  displayName,
};
