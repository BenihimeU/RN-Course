import React from 'react';
import { View, Image, Text } from 'react-native';
import CardItem from '../card/card-item';

const AlbumHeader = ({ header }) => {
    const { 
        thumbnail_image, 
        title, 
        artist 
    } = header;
    const { 
        imageContainer,
        thumbnailStyle, 
        textContainer,
        textStyle
    } = styles;
    return (
        <CardItem>
            <View style={imageContainer}>
                <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
            </View>
            <View style={textContainer}>
                <Text style={textStyle}>{title}</Text>
                <Text>{artist}</Text>
            </View>
        </CardItem>
    );
};

const styles = {
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,

    },
    thumbnailStyle: {
        width: 50,
        height: 50
    },

    textContainer: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    textStyle: {
        fontSize: 18
    }
};

export default AlbumHeader;
