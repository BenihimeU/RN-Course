import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import * as actions from '../redux/actions';
import Swipe from '../components/swipe';

class DeckScreen extends Component {

  renderDeck(post) {
    const defaultLatlng = {
      longitude: 77.59,
      latitude: 12.97,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    };
    return (
      <Card title={post.Name}>
        {/* <View style={{ height: 250 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={true}
            initialRegion={defaultLatlng}
          >
          </MapView>
        </View> */}
        <View style={styles.deckWarapper}>
          <Text>{post.BranchType}</Text>
          <Text>{post.DeliveryStatus}</Text>
        </View>
        <View style={styles.deckWarapper}>
          <Text>{post.Description || 'No details available'}</Text>
        </View>
        <View style={styles.deckWarapper}>
          <Text>{post.Circle}</Text>
          <Text>{post.State}</Text>
        </View>
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title='No more results'>
      </Card>
    )
  }

  render() {
    return (
      <View>
        <Swipe
          data={this.props.posts}
          renderCard={this.renderDeck}
          renderNoMoreCards={this.renderNoMoreCards}
          onSwipeRight={office => { this.props.likeOffice(office) }}
        />
      </View>
    );
  }
}

const styles = {
  deckWarapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}
const mapStateToProps = (state, oldProps) => {
  const { posts } = state;
  return { posts: posts.PostOffice }
}

export default connect(mapStateToProps, actions)(DeckScreen);