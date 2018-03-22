import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import { CardItem, Card } from '.';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {

  componentWillUpdate() {
  }

  rowSelected(id) {
    Actions.employeeEdit({
      employee: this.props.employee
    });
  }

  render() {
    const { titleStyle } = styles;
    const { uid, name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={this.rowSelected.bind(this, uid)}>
        <View>
          <CardItem>
            <Text
              style={titleStyle}>
              {name}
            </Text>
          </CardItem>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default ListItem;