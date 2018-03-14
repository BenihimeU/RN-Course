import { combineReducers } from 'redux';
import LibraryReducer from './library.reducer';
import selectionReducer from './selection.reducer';
export default combineReducers({
  libraries: LibraryReducer,
  selectedLibraryId: selectionReducer
});