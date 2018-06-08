import React from 'react';
import { 
    Text,
    View
} from 'react-native';

const Header = (props) => {
    const { 
        textStyle,
        viewStyle
     } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 24,
        color: '#FFFFFF'
    },
    viewStyle: {
        backgroundColor: '#D10465',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        elevation: 2,
        position: 'relative'
    }
};

export default Header;
