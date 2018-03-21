import { combineReducers } from 'redux';
import AuthReducer from './auth.reducers';
import EmployeeReducer from './employee.reducers'

export default combineReducers({
  auth: AuthReducer,
  employeeFrom: EmployeeReducer
})