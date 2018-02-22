import React from 'react';
import {
    AppRegistry
} from 'react-native';
import Header from './src/components/header/header';

// Create component
const App = () => (
    <Header headerText={'zMusic'} />
);

//Register component
AppRegistry.registerComponent('photoapp', () => App);
