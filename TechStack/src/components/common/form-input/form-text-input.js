import React from 'react';
import { View, Text, TextInput } from 'react-native';

const FormInputText = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { 
    contianerStyle,
    labelStyle,
    textInputStyle 
  } = styles;
  return(
    <View style={contianerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        value={value}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        style={textInputStyle}
        autoCorrect={false}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = {
  contianerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    color: '#000000',
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  textInputStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  }
};

export { FormInputText };