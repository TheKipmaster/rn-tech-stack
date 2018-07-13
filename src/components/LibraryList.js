import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem({ item }) {
    return <ListItem library={item} />;
  }

  render() {
    console.log(this.props.libraries);
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library) => `${library.id}`}
      />
    );
  }
}

const mapStateToProps = state => (
  { libraries: state.libraries }
);

export default connect(mapStateToProps)(LibraryList);