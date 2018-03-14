import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import {
  Header
} from './components/common';
import LibraryList from './components/library-list';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={styles.appStyle}>
        <Header headerText='Tech Stack' />
        <LibraryList />
      </View>
    </Provider>
  )
};

const styles  = {
  appStyle: {
    flex: 1
  }
};

export default App;