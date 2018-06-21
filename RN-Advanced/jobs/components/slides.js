import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;
class Slides extends Component {

  renderLastSlide(slideIndex) {
    if (slideIndex === this.props.slides.length - 1) {
      return (
        <Button
          title='I am ready'
          raised
          buttonStyle={styles.readyButtonStyle}
          onPress={this.props.onSlideComplete}>
        </Button>
      );
    }
  }
  renderSlides() {
    return this.props.slides.map((slide, slideIndex) => {
      return (
        <View
          key={slide.text}
          style={[styles.slideStyle, { backgroundColor: slide.color }]}>
          <Text style={styles.slideTextStyle}>{slide.text}</Text>
          {this.renderLastSlide(slideIndex)}
        </View>
      );
    });
  }
  render() {
    return (
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        {this.renderSlides()}
      </ScrollView >
    );
  }
}
const styles = {
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideTextStyle: {
    fontSize: 30,
    color: '#FFFFFF',
    textAlign: 'center',
    margin: 15
  },
  readyButtonStyle: {
    backgroundColor: '#AA02D1',
  }
}
export default Slides;