import React from 'react';
import { Notifications } from 'expo';
import { StyleSheet, Text, View, Alert } from 'react-native';
import TabBarComponent from './routes/route';
/* redux setup */
import { Provider } from 'react-redux';
import store from './redux/store';
/* redux setup */
/*push notification */
import PushService from './push-notification/push.service';

export default class App extends React.Component {

  componentDidMount() {
    PushService();
    Notifications.addListener((notification) => {
      const { data: { text }, origin } = notification;
      if (origin === 'recieved' && text) {
        Alert.alert('Push Notification', text, [{ 'text': 'OK' }]);
      }
    });
  }
  render() {
    return (
      /* redux setup */
      <Provider store={store}>
        <TabBarComponent />
      </Provider>
      /* redux setup */
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
