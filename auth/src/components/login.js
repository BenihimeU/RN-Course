import React, { Component } from 'react';
import { View } from 'react-native';
import {
    Card,
    CardItem,
    Header,
    CustomButton
} from './common'
class Login extends Component {

    onLoginPress(){

    }

    render() {
        return (
            <Card>
                <CardItem>
                </CardItem>
                <CardItem>
                </CardItem>
                <CardItem>
                    <CustomButton onPressed={ this.onLoginPress() }>Login</CustomButton>
                </CardItem>
            </Card>
        ) ;
    }
}

export default Login;