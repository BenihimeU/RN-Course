import { FETCH_POST_OFFICE, COORDINATIES_AQUIRED } from '../actions/types';


const INITIAL_STATE = {
  posts: []
}
const PostReducers = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case FETCH_POST_OFFICE:
      return action.payload
    case COORDINATIES_AQUIRED:
      return action.payload
    default:
      return state;
  }
}

export default PostReducers;