import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const { navigate } = navigation;
    return {
      title: 'Review Jobs',
      headerRight: (
        <Button
          title='Settings'
          onPress={() => { navigate('setting') }}
          backgroundColor='rgba(0,0,0,0)'
          color='rgba(0, 125, 255, 1)'
        >
        </Button>
      ),
      headerStyle: {
        // marginTop: Platform.OS === 'android' ? 24: 0
      }
    }
  }

  render() {
    return (
      <View>
        <Text>ReviewScreen page</Text>
        <Text>ReviewScreen page</Text>
        <Text>ReviewScreen page</Text>
        <Text>ReviewScreen page</Text>
        <Text>ReviewScreen page</Text>
      </View>
    );
  }
}

export default ReviewScreen;