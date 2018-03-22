import React from 'react';
import { View, Modal, Text } from 'react-native';
import { CardItem } from '../card/card-item';
import { CustomButton } from '../card/button';

const ConfirmModal = ({ children, onAccpet, onDecline, visible }) => {
  const {
    cardSectionStyle,
    textStyle,
    containerStyle
  } = styles;
  return (
    <Modal
      transparent
      animationType="slide"
      onRequestClose={() => { }}
      visible={visible}
    >
      <View style={containerStyle}>
        <CardItem style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardItem>
        <CardItem>
          <CustomButton onPressed={onAccpet}>Yes</CustomButton>
          <CustomButton onPressed={onDecline}>No</CustomButton>
        </CardItem>
      </View>
    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }

}

export { ConfirmModal };