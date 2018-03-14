import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text} from 'react-native';
import ListItem from './common/list-item';

 class LibraryList extends Component {

  componentWillMount(){
    const ds = new ListView.DataSource({
      rowHasChanged: ( r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.libraries);
  }

  renderListRow(library){
    return <ListItem library={library} /> ;
  }

  render() {
    return (
      <ListView
        dataSource ={this.dataSource}
        renderRow = {this.renderListRow}
      />
    );
  }
}

const mapStateToProp = (state) => {
  return { libraries: state.libraries }; 
};
export default connect( mapStateToProp ) (LibraryList);