import React, { Component } from 'react';
import { Card, CardItem, FormInputText, CustomButton } from './common';
import { connect } from 'react-redux';
import { } from 'redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  emailChanged(text){
    this.props.emailChanged(text);
  }
  onPasswordChange(text){
    this.props.passwordChanged(text);
  }

  onUserLoginPressed(){
    const { email, password } = this.props;
    this.props.loginUser({ email, password});
  }

  render() {
    return (
      <Card>
        <CardItem>
          <FormInputText
            label='Email'
            placeholder='test@test.com'
            onChangeText = {this.emailChanged.bind(this)}
            value={this.props.email}
          />
        </CardItem>
        <CardItem>
          <FormInputText
            secureTextEntry
            label='Password'
            placeholder='*******'
            onChangeText = { this.onPasswordChange.bind(this)}
            value = {this.props.password}
          />
        </CardItem>
        <CardItem>
          <CustomButton onPressed={this.onUserLoginPressed.bind(this)}>Login</CustomButton>
        </CardItem>
      </Card>
    )
  }
}

const mapStateToProps = (state, oldProps) => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

export default connect (mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
}) (LoginForm);