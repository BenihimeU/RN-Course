import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking, Alert } from 'react-native';
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from './../redux/actions';

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

  async openMapSearch(name) {
    try {
      let supported = await Linking.canOpenURL('geo:12.9716,77.5946');
      if (supported) {
        return Linking.openURL('geo:12.9716,77.5946');
      } else {
        Alert.alert(
          'React Native',
          "Can't open map in your current device",
          [
            { text: 'OK', onPress: () => console.log('OK Pressed') },
          ],
          { cancelable: false }
        )
      }
    }
    catch (error) {
      Alert.alert(
        'Error',
        JSON.stringify(error),
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      )
    }
  }

  renderReviewCard() {
    return this.props.likes.map(office => {
      return (
        <Card key={office.Name}>
          <View style={{ height: 150 }}>
            <View style={styles.detailsContainerStyle}>
              <Text style={styles.italics}>{office.Name}</Text>
              <Text style={styles.italics}>{office.BranchType}</Text>
            </View>
            <Icon
              raised
              name='room'
              iconStyle={{ color: 'green' }}
              containerStyle={{ backgroundColor: '#F0F0F0' }}
              onPress={() => { this.openMapSearch(office.Name); }}
            />

          </View>
        </Card>
      )
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderReviewCard()}
      </ScrollView>
    );
  }
}

const styles = {
  detailsContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  },
  italics: {
    fontStyle: 'italic',
    fontSize: 20
  }
}
const mapStateToProps = ({ likes }, oldProps) => {
  return { likes }
}
export default connect(mapStateToProps, actions)(ReviewScreen);