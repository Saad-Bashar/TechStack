import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import TestReducer from './TestReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
	libraries: LibraryReducer,
	test: TestReducer,
	selectedLibraryId: SelectionReducer,
});
