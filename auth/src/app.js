import React,  { Component} from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import Login from './components/login';
class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAvWjyYwVzYugNwrxI-4ewWgzELB4Ev5cU',
            authDomain: 'auth-77879.firebaseapp.com',
            databaseURL: 'https://auth-77879.firebaseio.com',
            projectId: 'auth-77879',
            storageBucket: 'auth-77879.appspot.com',
            messagingSenderId: '860898441967'
          };
        firebase.initializeApp(config);
    }

    render(){
        return (
            <View>
                <Header headerText='Authenticate'/>
                <Text>Auth App</Text>
                <Login />
            </View>
        )
    }
}

export default App;