import React, { Component} from 'react';
import { View, Text} from 'react-native';
import { Actions } from 'react-native-router-flux';

class EmployeeList extends Component{
  render(){
    console.log(Actions.currentScene);
    return(
      <View>
        <Text> Emp 1</Text>
        <Text> Emp 1</Text>
        <Text> Emp 1</Text>
        <Text> Emp 1</Text>
      </View>
    );
  }
}

export default EmployeeList;