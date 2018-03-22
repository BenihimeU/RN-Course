import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardItem, CustomButton, Spinner } from './common';
import { employeeCreate } from '../actions';
import EmployeeForm from './employee-form';

class EmployeeCreate extends Component {

  componentWillMount(){

  }

  onEmployeeCreate() {
    const {
      name, phone, shift
    } = this.props;
    this.props.employeeCreate({ name, phone, shift });
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size='large' />
      )
    }
    return (
      <CustomButton onPressed={this.onEmployeeCreate.bind(this)}>Create</CustomButton>
    );
  }

  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>
        <EmployeeForm {...this.props}/>
        <CardItem>
          {this.renderButton()}
        </CardItem>

      </Card>
    );
  }
}

const mapStateToProps = (state, oldProps) => {
  const { name, phone, shift, loading } = state.employeeFrom;
  return { name, phone, shift, loading };
};

export default connect(mapStateToProps, {
  employeeCreate
})(EmployeeCreate);