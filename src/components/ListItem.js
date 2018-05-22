import React, { Component } from 'react';
import { Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common/CardSection';
import * as actions from '../actions';

class ListItem extends Component {
  // lifecycle method called whenever the component is about to be rerendered to device
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    // figures out whether library was currently selected
    // and returns a description if it does.
    const { library, expanded } = this.props;
    const { descriptionStyle } = styles;

    // critical logic here
    if (expanded) {
      return (
        <CardSection>
          <Text style={descriptionStyle}>
            {library.description}
          </Text>
        </CardSection>

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
  },
  descriptionStyle: {
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5
  }
};

// now called w/ two args, ownProps - the props that are passed to the component we are wrapping
const mapStateToProps = (state, ownProps) => {
  // having ownProps lets us move the logic out of the component
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};
// why put it here? on more complex components will be extremely helpful

// remember mapStateToProps method is our ability to interface from application level state to component level
// its where we pluck property from our state object and inject them into our components

/*
  SUMMARY
  whenever our application state changes, our mapStateToProps method will rerun
    which thus causes our application to rerender
      thus calling our componentWillUpdate

  1. whenever we call an action creator
  2. dispatches an action
  3. reducers rerun
  4. state recalulcated
  5. state flows into mapStateToProps
  6. new props show up in component
  7. app rerenders
*/


// when connnect runs - modifies what data that will show up to our list item as props
export default connect(mapStateToProps, actions)(ListItem);
