import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props)
    return;
  }
}

// forging the logic behind the connection made between Provider and Connect Helper
const mapStateToProps = state => {
  return { libraries: state.libraries }
};

// calls the function connect,
// when connect is called, it returns another function
// we then immediately call that function with a LibraryList
export default connect(mapStateToProps)(LibraryList);
