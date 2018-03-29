import React, { Component } from 'react';
import { View, Text, Animated } from 'react-native';

class Ball extends Component {

  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    const { ballStyle } = styles;
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={ballStyle}></View>
      </Animated.View>
    );
  }
}

const styles = {
  ballStyle: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: 'red',
    borderWidth: 30
  }
};

export default Ball;