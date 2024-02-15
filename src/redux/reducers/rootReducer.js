import { combineReducers } from 'redux';
import { userInputReducer } from './userInputReducer';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
	userInput: userInputReducer,
	search: searchReducer,
});
