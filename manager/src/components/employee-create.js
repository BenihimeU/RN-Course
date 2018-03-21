import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Picker } from 'react-native';
import { Card, CardItem, FormInputText, CustomButton } from './common';
import { emloyeeFieldUpdate } from '../actions';

class EmployeeCreate extends Component {

  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>
        <CardItem>
          <FormInputText
            label='name'
            placeholder='Jason Grace'
            onChangeText={value => this.props.emloyeeFieldUpdate({ property: 'name', value })}
            value={name}
          />
        </CardItem>
        <CardItem>
          <FormInputText
            label='phone no'
            placeholder='1234-555-678'
            onChangeText={value => this.props.emloyeeFieldUpdate({ property: 'phone', value })}
          />
        </CardItem>
        <CardItem>
          <Picker
            style={{ flex: 1 }}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.emloyeeFieldUpdate({ property: 'shift', value })}
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
        <CardItem>
          <CustomButton>Save</CustomButton>
        </CardItem>

      </Card>
    );
  }
}

const mapStateToProps = (state, oldProps) => {
  const { name, phone, shift } = state.employeeFrom;
  return { name, phone, shift };
}

export default connect(mapStateToProps, {
  emloyeeFieldUpdate
})(EmployeeCreate);