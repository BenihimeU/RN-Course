import { CLEAR_FAVOURITES, LIKE_OFFICE } from '../actions/types';
import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/es/constants';
const LikeReducers = (state = [], action) => {
  switch (action.type) {
    case REHYDRATE:
      return action.payload.likes || [];
    case CLEAR_FAVOURITES:
      return [];
    case LIKE_OFFICE:
      return _.uniqBy([action.payload, ...state], 'Name');
    default:
      return state;
  }
}

export default LikeReducers;