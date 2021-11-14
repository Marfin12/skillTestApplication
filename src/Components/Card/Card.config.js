// @flow

import type { Props } from './Card.types';

import Constants from '../../Constants';

const defaultProps: Props = {
  children: null,
  style: {},
  onPress: Constants.UTILS.EMPTY_FUNCTION,
};

const displayName = 'Card';

export default {
  defaultProps,
  displayName,
};
