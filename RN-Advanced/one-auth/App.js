import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpComponent from './components/sign-up.component';
import SignInComponent from './components/sign-in.component';

export default class App extends React.Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyAfMh_F3Bm7nagqM8oUzBrMqjUgflGmZq4",
      authDomain: "fb-one-auth.firebaseapp.com",
      databaseURL: "https://fb-one-auth.firebaseio.com",
      projectId: "fb-one-auth",
      storageBucket: "fb-one-auth.appspot.com",
      messagingSenderId: "202098217577"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpComponent />
        <SignInComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
