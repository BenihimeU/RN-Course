import {
  EMAIL_CHANGE,
  PASSWORD_CHANGE,
  LOGIN_SUCCESS
} from '../actions/types';
import { Card } from '../components/common';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: 'Authentication failed',
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
      return { ...state, user: action.payload, loading: false };
    default:
      return state;
  }
};