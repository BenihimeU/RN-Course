import React, { Component } from 'react';
import { Card, CardItem, FormInputText, CustomButton } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardItem>
          <FormInputText
            label='Email'
            placeholder='test@test.com'
          />
        </CardItem>
        <CardItem>
          <FormInputText
            secureTextEntry
            label='Email'
            placeholder='test@test.com'
          />
        </CardItem>
        <CardItem>
          <CustomButton>Login</CustomButton>
        </CardItem>
      </Card>
    )
  }
}

export default LoginForm;