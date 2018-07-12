import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearFavourites } from './../redux/actions/post.actions';
class SettingScreen extends Component {

  render() {
    return (
      <View>
        <Button
          title='Clear Favourites'
          large
          icon={{ name: 'delete-forever' }}
          backgroundColor="#F44336"
          onPress={this.props.clearFavourites}
        />
      </View>
    );
  }
}

export default connect(null, { clearFavourites })(SettingScreen);