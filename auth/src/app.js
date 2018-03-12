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
            apiKey: 'AIzaSyAvWjyYwVzYugNwrxI-4ewWgzELB4Ev5cU',
            authDomain: 'auth-77879.firebaseapp.com',
            databaseURL: 'https://auth-77879.firebaseio.com',
            projectId: 'auth-77879',
            storageBucket: 'auth-77879.appspot.com',
            messagingSenderId: '860898441967'
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