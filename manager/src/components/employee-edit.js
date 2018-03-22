import React, { Component } from 'react';
import { Card, CardItem, CustomButton, ConfirmModal } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './employee-form';
import { employeeFieldUpdate, employeeUpdate, employeeDelete } from '../actions';
import _ from 'lodash';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
  state = {
    showModal: false
  };
  componentWillMount() {
    _.each(this.props.employee, (value, property) => {
      this.props.employeeFieldUpdate({ property, value });
    })
  }

  onSavePressed() {
    const { name, phone, shift } = this.props;
    this.props.employeeUpdate({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPressed() {
    const { phone, shift } = this.props;
    Communications.text(phone, ` Your upcoming shift on ${shift}`);
  }

  onFirePressed() {
    this.setState({ showModal: !this.state.showModal });
  }

  onFireConfirm() {
    this.props.employeeDelete({ uid: this.props.employee.uid });
  }

  onFireDeclined() {
    this.setState({ showModal: !this.state.showModal });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardItem>
          <CustomButton
            onPressed={this.onSavePressed.bind(this)}>Save</CustomButton>
        </CardItem>
        <CardItem>
          <CustomButton
            onPressed={this.onTextPressed.bind(this)}
            customStyle={{ backgroundColor: 'green' }}>Text Schedule</CustomButton>
        </CardItem>
        <CardItem>
          <CustomButton
            onPressed={this.onFirePressed.bind(this)}
            customStyle={{ backgroundColor: 'red' }}>Fire Employee</CustomButton>
        </CardItem>

        <ConfirmModal
          visible={this.state.showModal}
          onAccpet={this.onFireConfirm.bind(this)}
          onDecline={this.onFireDeclined.bind(this)}
        >Do you want fire employee ?</ConfirmModal>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeFrom;
  return { name, phone, shift };
}

export default connect(mapStateToProps, {
  employeeFieldUpdate,
  employeeUpdate,
  employeeDelete
})(EmployeeEdit);