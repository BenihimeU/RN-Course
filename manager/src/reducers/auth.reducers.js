import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS,
  LOGIN_USER_FAILED,
  LOGIN_USER
} from '../actions/types';
import { Card } from '../components/common';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
  user: null
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGE:
      return { ...state, email: action.payload };

    case PASSWORD_CHANGE:
      return { ...state, password: action.payload };

    case LOGIN_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        user: action.payload
      };

    case LOGIN_USER_FAILED:
      return { ...state, error: 'Authentication failed', password: '', loading: false };

    case LOGIN_USER:
      return { ...state, error: '', loading: true };
    default:
      return state;
  }
};