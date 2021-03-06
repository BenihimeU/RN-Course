import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/components/deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Card #2', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Card #3', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Card #4', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Card #5', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Card #6', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Card #7', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Card #8', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];

export default class App extends React.Component {

  renderCard(item) {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}>Customize later</Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View now"
        />
      </Card>
    )
  }

  renderNoMoreCard() {
    return (
      <Card title='All done!'>
        <Text style={{ marginBottom: 10}}>
        No more cards to swipe</Text>
        <Button backgroundColor='#03F9A4'
        title='Load more ...'/>
      </Card>
    );
  }

  onSwipeLeft(card) {
    console.log(card);
  }

  onSwipeRight(card) {
    console.log(card);
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          dataArray={DATA}
          renderCard={this.renderCard}
          renderNoMoreCard={this.renderNoMoreCard}
          onSwipeLeft={this.onSwipeLeft}
          onSwipeRight={this.onSwipeRight}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
