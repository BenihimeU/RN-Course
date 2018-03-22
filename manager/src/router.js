import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/emloyee-list';
import EmployeeCreate from './components/employee-create';
import EmployeeEdit from './components/employee-edit';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' title='Login' component={LoginForm} initial />
        </Scene>
        <Scene key='employee'>
          <Scene
            key='employeeList'
            title='Employees'
            component={EmployeeList}
            rightTitle='Add'
            onRight={() => {
              Actions.employeeCreate()
            }}
            initial
          />
          <Scene key='employeeCreate' title='Create' component={EmployeeCreate} />
          <Scene key='employeeEdit' title='Edit' component={EmployeeEdit} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;