import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  // componentWillMount() {
  //   const ds = new ListView.DataSource({
  //     rowHasChanged: (r1, r2,) => r1 !== r2
  //   });
  //
  //   this.dataSource = ds.cloneWithRows(this.props.libraries);
  // }

  renderRow(library) {
    return <ListItem library={library} />;
  }

  // still have to figure out what is happening
  render() {
    return(
      <FlatList
        data={this.props.libraries}
        renderItem={({ item }) => this.renderRow(item)}
        keyExtractor={(library) => library.id.toString()}
      />
      // <FlatList
      //   data={[{key: 'a'}, {key: 'b'}]}
      //   renderItem={({item}) => <Text></Text>}
      // />
    );
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


/*
  Summary
  when app first boots up redux creates a new store using the libraries reducer
    once store is created, it runs the reducer one time
      each object returned by the reducer
        we pass it to the provider as a prop - provider is the middle man between react and redux
        next App component is rendered to screen
          thus renders LibraryList component
            once LibraryList is about to render, the connect helper fires
              "the component im wrapping is about to render"
            the connect function then reaches to the provider and gets the state
            provider gives up the state and the connect tag pumps it down into the library list
                done via mapStateToProps
*/
