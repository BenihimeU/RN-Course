import { COORDINATIES_AQUIRED, LIKE_JOB } from '../actions/types';
import _ from 'lodash';
const LikeReducers = (state = [], action) => {
  switch (action.type) {
    case LIKE_JOB:
      return _.uniqBy([action.payload, ...state], 'Name');
    default:
      return state;
  }
}

export default LikeReducers;