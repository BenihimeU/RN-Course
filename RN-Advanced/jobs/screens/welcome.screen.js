import _ from 'lodash';
import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { AsyncStorage } from 'react-native';
import Slides from '../components/slides';
import { AUTH_KEYS } from '../redux/constant';

const SLIDE_LIST = [
  { text: ' Welcome to job', color: '#03A9F4' },
  { text: 'Locating local jobs are easy', color: '#009688' },
  { text: 'Set your location', color: '#03A9F4' }
]
class WelcomeScreen extends Component {
  state = { token: null };

  async componentWillMount() {
    let token = await AsyncStorage.getItem(AUTH_KEYS.FB_TOKEN);
    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    } else {
      this.setState({ token: false });
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    if (_.isNull(this.state.token)) {
      return (
        <AppLoading />
      )
    }
    return (
      <Slides slides={SLIDE_LIST} onSlideComplete={() => { navigate('authenticate'); }} />
    )
  }
}

export default WelcomeScreen;