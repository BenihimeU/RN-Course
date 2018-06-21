import {
  FB_LOGIN_FAILED,
  FB_LOGIN_SUCCESS
} from '../actions/types';

const AuthReducer = (state = {}, action) => {
  switch (action.type) {
    case FB_LOGIN_SUCCESS:
      return { token: action.payload }
    case FB_LOGIN_FAILED:
      return { token: null }
    default:
      return state;
  }
}

export default AuthReducer;