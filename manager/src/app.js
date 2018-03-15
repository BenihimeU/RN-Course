import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';

class Manager extends Component {

  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyCbVnw-vNqU-j5G3EuwTmqo_HteS7aEAUs',
      authDomain: 'manager-b2b30.firebaseapp.com',
      databaseURL: 'https://manager-b2b30.firebaseio.com',
      projectId: 'manager-b2b30',
      storageBucket: '',
      messagingSenderId: '1005238805172'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Manager</Text>
        </View>
      </Provider>
    )
  }
}

export default Manager;