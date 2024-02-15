import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { testStore, renderWithStore } from '../../redux/testStoreUtils';
import { rootReducer } from '../../redux/reducers/rootReducer';
import SearchPage from './SearchPage';
import {
	addIngredient,
	setCurrentIngredient,
	setQuery,
} from '../../redux/actions/userInputActions';

describe('SearchPage component', () => {
	it('should dispatch setQuery when the text field value changes', () => {
		const initialState = {
			userInput: {
				query: 'Fish',
				ingredients: [],
			},
			search: { loading: false, error: null },
		};
		const store = testStore(rootReducer, initialState);
		store.dispatch = jest.fn();
		renderWithStore(<SearchPage />, store);
		const recipeTextField = screen.getByLabelText('Meal');
		fireEvent.change(recipeTextField, { target: { value: 'Pasta' } });
		const expectedAction = setQuery('Pasta');

		expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
	});

	it('should dispatch setCurrentIngredient when the "Add" button is clicked', () => {
		const initialState = {
			userInput: {
				query: 'Fish',
				ingredients: [],
				currentIngredient: 'fish',
			},
			search: { loading: false, error: null },
		};

		const store = testStore(rootReducer, initialState);
		store.dispatch = jest.fn();
		renderWithStore(<SearchPage />, store);
		const ingredientTextField = screen.getByLabelText('Add Ingredient');
		fireEvent.change(ingredientTextField, { target: { value: 'Tomato' } });
		const addButton = screen.getByText('Add');
		fireEvent.click(addButton);
		const currentIngredientResult = setCurrentIngredient('');
		const addIngredientResult = addIngredient('Tomato');
		const expectedAction = {
			...addIngredientResult,
			...currentIngredientResult,
		};

		expect(store.dispatch).toHaveBeenCalledWith(currentIngredientResult);
		expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
	});

	it('should show an alert when the query is empty and "Add" button is clicked', () => {
		const initialState = {
			userInput: {
				query: '',
				ingredients: [],
			},
			search: { loading: false, error: null },
		};
		const store = testStore(rootReducer, initialState);
		window.alert = jest.fn();
		renderWithStore(<SearchPage />, store);
		const addButton = screen.getByText('Add');
		fireEvent.click(addButton);
		expect(window.alert).toHaveBeenCalledWith(
			'Please enter a meal before adding ingredients.'
		);
	});

	it('should not dispatch addIngredient when an ingredient is being added for the second time', () => {
		const initialState = {
			userInput: {
				query: 'Rice',
				ingredients: ['eggs'],
				currentIngredient: 'h',
			},
			search: { loading: false, error: null },
		};
		const store = testStore(rootReducer, initialState);
		window.alert = jest.fn();
		store.dispatch = jest.fn();
		renderWithStore(<SearchPage />, store);
		const addButton = screen.getByText('Add');
		const textField = screen.getByLabelText('Add Ingredient');
		fireEvent.change(textField, { target: { value: 'eggs' } });
		fireEvent.click(addButton);
		expect(store.dispatch).not.toHaveBeenCalledWith(addIngredient('eggs'));
	});
});
