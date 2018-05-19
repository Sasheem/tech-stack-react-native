import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common/CardSection';


class ListItem extends Component {
  render() {
    const { library } = this.props;
    const { titleStyle } = styles;
    console.log(library);

    return (
      <CardSection>
        <Text style={titleStyle}>
          {library.title}
        </Text>
      </CardSection>
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
