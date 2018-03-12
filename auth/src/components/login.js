import React, { Component } from 'react';
import { 
    Alert,
    Text
 } from 'react-native';
 import firebase from 'firebase';
import {
    Card,
    CardItem,
    Header,
    CustomButton,
    FormInputText,
    Spinner
} from './common'
class Login extends Component {
    state = {
        email: '',
        password: '',
        success: '',
        error: '',
        showSpinner: false
    };

    onLoginPress(){
        const { email, password} = this.state;
        if(email && password){
            this.showLoader();
            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(err => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onUserCreated.bind(this))
                    .catch(this.onLoginFailed.bind(this));
                });
        } else{
            this.setState({ error: 'Enter inputs', success: ''});
        }
    }

    onLoginSuccess(){
        this.setState({ 
            success: 'Successfully Logged In',
            showSpinner: false,
            email: '',
            password: ''
         });
    }

    onLoginFailed(){
        this.setState({ 
            error: 'Authentication Failed',
            showSpinner: false,
            email: '',
            password: ''
        });
    }

    onUserCreated(){
        this.setState({ 
            success: 'New Account added',
            showSpinner: false,
            email: '',
            password: ''
        });
    }

    showLoader(){
        this.setState({ 
            showSpinner: true, 
            error: '', 
            success: ''
        });
    }

    renderButton(){
        if(this.state.showSpinner){
            return ( <Spinner  size={'small'}/>);
        }
        return (
            <CustomButton onPressed={ this.onLoginPress.bind(this) }>Login</CustomButton>

        );
    }

    render() {
        const { 
            errorMessageStyle,
            successMessageStyle
        } = styles;
        return (
            <Card>
                <CardItem>
                    <FormInputText 
                        label={'Username'}
                        placeholder={'user@gmail.com'}
                        value={this.state.email}
                        onChangeText={ email => this.setState({ email }) }
                    />
                </CardItem>
                <CardItem>
                    <FormInputText 
                        label={'Password'}
                        placeholder={'*********'}
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={ password => this.setState({ password }) }
                    />
                </CardItem>
                <Text style={errorMessageStyle}>
                    {this.state.error}
                </Text>
                <Text style={successMessageStyle}>
                    {this.state.success}
                </Text>
                <CardItem>{ this.renderButton() }</CardItem>
            </Card>
        ) ;
    }
}

const styles = {
    errorMessageStyle: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    },
    successMessageStyle: {
        color: 'green',
        fontSize: 20,
        alignSelf: 'center'
    }
}

export default Login;