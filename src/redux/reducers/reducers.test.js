import { userInputReducer } from './userInputReducer';
import { searchReducer } from './search';
import {
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	UPDATE_QUERY,
	CURRENT_INGREDIENT,
} from '../actions/userInputActions';
import {
	SEARCH_REQUEST,
	SEARCH_SUCCESS,
	SEARCH_FAILURE,
} from '../actions/searchActions';

describe('userInputReducer', () => {
	const initialState = {
		query: 'Initial query',
		ingredients: ['Tomato', 'Onion'],
		currentIngredient: '',
	};
	it('should add an ingredient to the state', () => {
		const action = {
			type: ADD_INGREDIENT,
			payload: 'Fish',
		};
		const newState = userInputReducer(initialState, action);
		expect(newState.ingredients).toEqual(['Tomato', 'Onion', 'Fish']);
	});

	it('should remove an ingredient from the state', () => {
		const action = {
			type: REMOVE_INGREDIENT,
			payload: 'Tomato',
		};
		const newState = userInputReducer(initialState, action);
		expect(newState.ingredients).toEqual(['Onion']);
	});

	it('should update the query in the state', () => {
		const action = {
			type: UPDATE_QUERY,
			payload: 'new query',
		};
		const newState = userInputReducer(initialState, action);
		expect(newState.query).toEqual('new query');
	});

	it('should change the currentIngredient in the state', () => {
		const action = {
			type: CURRENT_INGREDIENT,
			payload: 'eggs',
		};
		const newState = userInputReducer(initialState, action);
		expect(newState.currentIngredient).toEqual('eggs');
	});

	it('should return the current state for an unknown action type', () => {
		const action = {
			type: 'UNKNOWN_ACTION_TYPE',
		};
		const newState = userInputReducer(initialState, action);
		expect(newState).toEqual(initialState);
	});
});

describe('searchReducer', () => {
	const initialState = {
		recipes: [],
		loading: true,
		error: null,
		isSearchComplete: false,
	};
	it('handles SEARCH_REQUEST correctly', () => {
		const action = { type: SEARCH_REQUEST };
		const newState = searchReducer(initialState, action);
		expect(newState).toEqual({
			recipes: [],
			loading: true,
			error: null,
			isSearchComplete: false,
		});
	});

	it('handles SEARCH_SUCCESS correctly', () => {
		const mockRecipes = [{ id: 1, title: 'Recipe 1' }];
		const action = { type: SEARCH_SUCCESS, payload: mockRecipes };
		const newState = searchReducer(initialState, action);

		expect(newState).toEqual({
			recipes: mockRecipes,
			loading: false,
			error: null,
			isSearchComplete: true,
		});
	});

	it('handles SEARCH_FAILURE correctly', () => {
		const mockError = 'Error message';
		const action = { type: SEARCH_FAILURE, payload: mockError };
		const newState = searchReducer(initialState, action);

		expect(newState).toEqual({
			recipes: [],
			loading: false,
			error: mockError,
			isSearchComplete: true,
		});
	});

	it('returns current state for unknown action type', () => {
		const action = { type: 'SOME_ACTION' };
		const newState = searchReducer(initialState, action);
		expect(newState).toEqual(initialState);
	});
});
