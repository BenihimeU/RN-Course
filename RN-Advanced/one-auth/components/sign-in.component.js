import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { FormInput, FormLabel, Button } from 'react-native-elements';
import axios from 'axios';

const API_URL = 'https://us-central1-fb-one-auth.cloudfunctions.net';
class SignInComponent extends Component {
  state = { phone: '', code: '', status: '' };


  handleSubmit = async () => {
    this.setState({ status: '' });
    try {
      const { phone, code } = this.state;
      let { data } = await axios.post(`${API_URL}/verifyOneTimePassword`, { phone, code });
      firebase.auth().signInWithCustomToken(data.token);
      this.setState({ status: 'Login Success' });
    }
    catch (error) {
      this.setState({ status: 'Login failed. Please try later' });
    }
  }

  render() {
    return (
      <View>
        <View style={{ marginBottom: 10, marginTop: 10 }}>
          <FormLabel>Enter Phone number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <FormLabel>OTP</FormLabel>
          <FormInput
            secureTextEntry
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button title='Sing in' onPress={this.handleSubmit} />
        <Text style={{ fontSize: 18, textAlign: 'center' }}>{this.state.status}</Text>
      </View>
    );
  }
}

export default SignInComponent;