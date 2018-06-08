import React from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import Header from './src/components/header/header';
import AlbumList from './src/components/album-list/album-list';

// Create component
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'zMusic'} />
        <AlbumList />
    </View>
);

//Register component
AppRegistry.registerComponent('realwear', () => App);
