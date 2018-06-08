import React from 'react';
import { Image } from 'react-native';
import CardItem from '../card/card-item';

const AlbumBody = ({ body }) => {
    const { 
        image
    } = body;
    const { 
        imageStyle
    } = styles;
    return (
        <CardItem>
            <Image style={imageStyle} source={{ uri: image }} />
        </CardItem>
    );
};

const styles = {
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default AlbumBody;
