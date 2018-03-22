import firebase from 'firebase';
import { EMPLOYEE_UPDATE_FIELD, EMPLOYEE_CREATE, EMPLOYEE_SAVE_SUCCESS, EMPLOYEE_LIST_SUCCESS } from "../actions/types";

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: 'Monday',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE_FIELD:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      };
    case EMPLOYEE_CREATE:
      return {
        ...state, loading: true
      };
    case EMPLOYEE_SAVE_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
        loading: false
      };
    default:
      return state;
  }
}