import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardItem, FormInputText, CustomButton, Spinner } from './common';
import { connect } from 'react-redux';
import { } from 'redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

  emailChanged(text) {
    this.props.emailChanged(text);
  }
  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onUserLoginPressed() {
    const { email, password } = this.props;
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      )
    }
  }

  renderButton() {
    if (this.props.loading) {
      return (
        <Spinner size='large' />
      )
    }
    return (
      <CustomButton onPressed={this.onUserLoginPressed.bind(this)}>Login</CustomButton>
    );
  }

  render() {
    return (
      <Card>
        <CardItem>
          <FormInputText
            label='Email'
            placeholder='test@test.com'
            onChangeText={this.emailChanged.bind(this)}
            value={this.props.email}
          />
        </CardItem>
        <CardItem>
          <FormInputText
            secureTextEntry
            label='Password'
            placeholder='*******'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardItem>

        {this.renderError()}
        <CardItem>
          {this.renderButton()}
        </CardItem>

      </Card>
    )
  }
}

const mapStateToProps = (state, oldProps) => {
  const {
    email,
    password,
    error,
    loading
  } = state.auth;

  return {
    email: email,
    password: password,
    error: error,
    loading: loading
  };
}

const styles = {
  errorTextStyle: {
    fontSize: 24,
    alignSelf: 'center',
    color: 'red'
  }
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);