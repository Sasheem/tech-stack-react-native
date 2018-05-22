import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  renderDescription() {
    // figures out whether library was currently selected
    // and returns a description if it does.
    const { library, expanded } = this.props;

    // critical logic here
    if (expanded) {
      return (
        <Text>{library.description}</Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
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

// now called w/ two args, ownProps - the props that are passed to the component we are wrapping
const mapStateToProps = (state, ownProps) => {
  // having ownProps lets us move the logic out of the component
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};
// why put it here? on more complex components will be extremely helpful

// when connnect runs - modifies what data that will show up to our list item as props
export default connect(mapStateToProps, actions)(ListItem);
