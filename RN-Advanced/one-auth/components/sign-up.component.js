import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import axios from 'axios';

const API_URL = 'https://us-central1-fb-one-auth.cloudfunctions.net';
class SignUpComponent extends Component {
  state = { phone: '', status: '' };


  handleSubmit = async () => {
    this.setState({ status: '' });
    try {
      const { phone } = this.state;
      await axios.post(`${API_URL}/addUser`, { phone });
      await axios.post(`${API_URL}/requestOneTimePassword`, { phone });
      this.setState({ status: 'OTP sent to registered phone no' });
    }
    catch (error) {
      this.setState({ status: 'Sign up failed. Please try later' });
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>
        <Button title='Sing up' onPress={this.handleSubmit} />
        <Text style={{ fontSize: 18, textAlign: 'center' }}>{this.state.status}</Text>
      </View>
    );
  }
}

export default SignUpComponent;