import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/emloyee-list';
import EmployeeCreate from './components/employee-create';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene key='login' title='Login' component={LoginForm} initial />
        </Scene>
        <Scene key='Employee'>
          <Scene
            key='EmployeeList'
            title='Employees'
            component={EmployeeList}
            rightTitle='Add'
            onRight={() => {
              Actions.EmployeeCreate()
            }}
            initial
          />
          <Scene key='EmployeeCreate' title='Employee Create' component={EmployeeCreate} />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;