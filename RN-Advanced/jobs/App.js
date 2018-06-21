import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabBarComponent from './routes/route';
/* redux setup */
import { Provider } from 'react-redux';
import store from './redux/store';
/* redux setup */

export default class App extends React.Component {
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
