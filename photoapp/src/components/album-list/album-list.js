import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios'

class AlbumList extends Component {
    state = {
        albums: []
    };
    componentWillMount() {
      axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => response.json()) 
        .catch((error) => console.warn('fetch error:', error))
        .then((response) => {
            this.setState({
                albums: response.data
            });
        });
    }

    render() {
        return (
            <View>
                <Text>{JSON.stringify(this.state.albums)}</Text>
            </View>
        );
    }
}

export default AlbumList;
