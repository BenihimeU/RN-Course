import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { AUTH_KEYS } from '../redux/constant';

class AuthScreen extends Component {

  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return (
      <View />
    )
  }
}

const mapStateToProps = (state) => {
  const { auth } = state;
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);