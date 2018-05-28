import React, { Component } from 'react';
import {
  Animated,
  View,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = SCREEN_WIDTH * 0.25;
const SWIPE_DURATION = 250;

class Deck extends Component {

  static defaultPorps = {
    onSwipeRight: () => { },
    onSwipeLeft: () => { },
    renderNoMoreCards: () => { }
  }

  constructor(props) {
    super(props);
    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, getsture) => {
        position.setValue({ x: getsture.dx, y: getsture.dy });
      },
      onPanResponderRelease: (event, getsture) => {
        if (getsture.dx > SWIPE_THRESHOLD) {
          this.swipeCard('right');
        } else if ((getsture.dx < -SWIPE_THRESHOLD)) {
          this.swipeCard('left');
        } else {
          this.resetCardPosition();
        }
      }
    });

    this.panResponder = panResponder;
    this.position = position;
    this.state = { index: 0 };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataArray !== this.props.dataArray) {
      this.setState({ index: 0 });
    }
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    )
  }

  renderCards() {
    if (this.state.index >= this.props.dataArray.length) {
      return this.props.renderNoMoreCard();
    }

    return this.props.dataArray.map((item, index) => {
      if (index < this.state.index) { return null; }
      if (index === this.state.index) {
        return (
          <Animated.View key={item.id}
            {...this.panResponder.panHandlers}
            style={[this.stlyeActiveCard(), styles.cardStyle]}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      }
      return (
        <Animated.View
          key={item.id}
          style={[styles.cardStyle, { top: 10 * (index - this.state.index) }]}
        >
          {this.props.renderCard(item)}
        </Animated.View>
      )
    }).reverse();
  }


  stlyeActiveCard() {
    const { position } = this;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ['-120deg', '0deg', '120deg']
    })
    return {
      ...this.position.getLayout(),
      transform: [{ rotate }]
    };
  }

  resetCardPosition() {
    Animated.spring(this.position, {
      toValue: { x: 0, y: 0 }
    }).start();
  }

  swipeCard(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight } = this.props;
    const item = this.props.dataArray[this.state.index];
    direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item);
    this.position.setValue({ x: 0, y: 0 });
    this.setState({ index: this.state.index + 1 });
  }

  prepareNextCard() {

  }

}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH
  }
}
export default Deck;