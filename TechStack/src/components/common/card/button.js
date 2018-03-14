import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ onPressed, children }) => {
    
    const { 
        buttonStyle,
        textStyle
    } = styles;


    return (
        <TouchableOpacity 
            style={buttonStyle}
            onPress={onPressed}
        ><Text style={textStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#841584',
        borderRadius: 5,
        borderColor: '#007AF2',
        margin: 5
    },

    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '500',
        paddingTop: 10,
        paddingBottom: 10
    }
};

export { CustomButton };
