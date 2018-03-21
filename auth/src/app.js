import React,  { Component} from 'react';
import { View, Text } from 'react-native';
import firebase, { firestore } from 'firebase';
import { Header, CustomButton, Spinner, CardItem } from './components/common';
import Login from './components/login';
class App extends Component {
    state ={
        isLoggedIn: null
    }
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCbVnw-vNqU-j5G3EuwTmqo_HteS7aEAUs',
            authDomain: 'manager-b2b30.firebaseapp.com',
            databaseURL: 'https://manager-b2b30.firebaseio.com',
            projectId: 'manager-b2b30',
            storageBucket: '',
            messagingSenderId: '1005238805172'
          };
          firebase.initializeApp(config);

        firebase.auth().onAuthStateChanged(
            (user) => {
                if(user){
                    this.setState({ isLoggedIn: true });
                }else{
                    this.setState({ isLoggedIn: false });
                }
            }
        );
    }

    logout(){
        firebase.auth().signOut();
    }

    renderLogin(){

        switch (this.state.isLoggedIn){
            case true :
                return (
                    <CardItem><CustomButton onPressed={this.logout.bind(this)}>Logout</CustomButton></CardItem>
                );
            break;

            case false :
                return(
                    <Login />
                );
            break;

            default :
                return(
                    <Spinner />
                );
        }
    }
    render(){
        return (
            <View>
                <Header headerText='Authenticate'/>
                { this.renderLogin() }
            </View>
        )
    }
}

export default App;