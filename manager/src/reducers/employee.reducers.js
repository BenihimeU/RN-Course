import { EMPLOYEE_UPDATE_FIELD } from "../actions/types";

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE_FIELD :
      return {
        ...state,
        [action.payload.property]: action.payload.value
      };
    default:
      return state;
  }
}