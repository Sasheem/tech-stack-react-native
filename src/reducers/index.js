import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: SelectionReducer
});


// rememebr a reducer is a function that returns some amount of data
// this data represents the states for our App
/*
  Reducer Design
  Different types of reducers
  How do we know which reducers to make?

  we will have a list of libraries and a current library
  for this application lets make two pieces of states
  thus we'll need two separate reducers
  libraryReducer
    producing our list of libraries to the user
    an array of objects
    id and name
  selectionReducer
    keeps track of current library to be expanded for more detail
    id

*/
