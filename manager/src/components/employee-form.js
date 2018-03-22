import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { CardItem, FormInputText } from './common';
import {connect} from 'react-redux';
import { employeeFieldUpdate } from '../actions';

class EmployeeForm extends Component {

  render() {
    const { name, phone, shift } = this.props;
    return (
      <View>
        <CardItem>
          <FormInputText
            label='name'
            placeholder='Jason Grace'
            onChangeText={value => this.props.employeeFieldUpdate({ property: 'name', value })}
            value={name}
          />
        </CardItem>
        <CardItem>
          <FormInputText
            label='phone no'
            placeholder='1234-555-678'
            onChangeText={value => this.props.employeeFieldUpdate({ property: 'phone', value })}
            value={phone}
          />
        </CardItem>
        <CardItem style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            style={{ flex: 1, paddingTop: 10 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeFieldUpdate({ property: 'shift', value })}
          >
            <Picker.Item label='Monday' value='Monday' />
            <Picker.Item label='Tuesday' value='Tuesday' />
            <Picker.Item label='Wednesday' value='Wednesday' />
            <Picker.Item label='Thursday' value='Thursday' />
            <Picker.Item label='Friday' value='Friday' />
            <Picker.Item label='Saturday' value='Saturday' />
            <Picker.Item label='Sunday' value='Sunday' />
          </Picker>
        </CardItem>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    paddingLeft: 20
  }
};

const mapStateToProps = (state, oldProps) => {
  const { name, phone, shift } = state.employeeFrom;
  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeFieldUpdate
})(EmployeeForm);