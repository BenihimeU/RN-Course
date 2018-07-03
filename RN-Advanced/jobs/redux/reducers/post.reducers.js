import { FETCH_POST_OFFICE } from '../actions/types';


const INITIAL_STATE = {
  posts: []
}
const PostReducers = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case FETCH_POST_OFFICE:
      return action.payload
    default:
      return state;
  }
}

export default PostReducers;