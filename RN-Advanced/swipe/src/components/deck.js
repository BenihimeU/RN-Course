import React, { Component } from 'react';
import {
  Animated,
  View,
  PanResponder
} from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);
    const panResponder = PanResponder.create({

    });

    this.panResponder = panResponder;
  }

  componentWillMount() {

  }

  renderCards() {
    return (
      this.props.dataArray.map(
        (item) => {
          return this.props.renderCard(item);
        })
    );
  }

  render() {
    return (
      <View>
        {
          this.renderCards()
        }
      </View>
    )
  }
}

export default Deck;