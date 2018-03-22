import { combineReducers } from 'redux';
import AuthReducer from './auth.reducers';
import EmployeeReducer from './employee.reducers';
import EmployeeListReducer from './employee-list.reducer';

export default combineReducers({
  auth: AuthReducer,
  employeeFrom: EmployeeReducer,
  employeeList: EmployeeListReducer
})