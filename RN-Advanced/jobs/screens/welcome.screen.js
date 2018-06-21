import React, { Component } from 'react';
import Slides from '../components/slides';

const SLIDE_LIST = [
  { text: ' Welcome to job', color: '#03A9F4' },
  { text: 'Locating local jobs are easy', color: '#009688' },
  { text: 'Set your location', color: '#03A9F4' }
]
class WelcomeScreen extends Component {

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Slides slides={SLIDE_LIST} onSlideComplete={() => { navigate('authenticate'); }} />
    )
  }
}

export default WelcomeScreen;