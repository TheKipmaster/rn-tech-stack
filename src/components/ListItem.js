import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardItem } from './common/CardItem';

class ListItem extends Component {
  render() {
    const { titleStyle } = styles;

    console.log(this.props.library);
    return (
      <CardItem>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardItem>
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
