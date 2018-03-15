import React, { Component } from 'react';
import { 
  Text, 
  TouchableWithoutFeedback, 
  View, 
  LayoutAnimation,
  UIManager,
  Platform
} from 'react-native';
import { connect } from 'react-redux';
import { CardItem, Card } from '.';
import * as actions from '../../actions';

class ListItem extends Component {

  componentWillUpdate() {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }
  }

  rowSelected(id) {
    this.props.selectLibrary(id);
  }

  renderDescription() {
    const { isExpanded, library } = this.props;
    if(isExpanded){
      return (
        <CardItem>
          <Text>{library.description}</Text>
        </CardItem>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback onPress={this.rowSelected.bind(this, id)}>
        <View>
          <CardItem>
            <Text
              style={titleStyle}>
              {title}
            </Text>
          </CardItem>
          { this.renderDescription()}
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

const mapStateToProps = (state, ownProps) => {
  return { isExpanded: state.selectedLibraryId === ownProps.library.id }
}

export default connect(mapStateToProps, actions)(ListItem);