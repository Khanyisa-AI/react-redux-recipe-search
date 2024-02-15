import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { testStore, renderWithStore } from '../../redux/testStoreUtils';
import IngredientList from './IngredientList';
import { userInputReducer } from '../../redux/reducers/userInputReducer';
import { removeIngredient } from '../../redux/actions/userInputActions';

describe('IngredientList component', () => {
	it('should render the list of ingredients correctly', () => {
		const initialState = {
			userInput: {
				ingredients: ['Fish', 'Onion', 'Rice'],
			},
		};
		const store = testStore(userInputReducer, initialState);
		renderWithStore(<IngredientList />, store);
		const ingredient1Element = screen.getByText('Fish');
		const ingredient2Element = screen.getByText('Onion');
		const ingredient3Element = screen.getByText('Rice');
		expect(ingredient1Element).toBeInTheDocument();
		expect(ingredient2Element).toBeInTheDocument();
		expect(ingredient3Element).toBeInTheDocument();
	});

	it('should dispatch removeIngredient action when the remove button is clicked', () => {
		const initialState = {
			userInput: {
				ingredients: ['Tomato'],
			},
		};
		const store = testStore(userInputReducer, initialState);
		store.dispatch = jest.fn();
		renderWithStore(<IngredientList />, store);
		const removeButton = screen.getByRole('button', { name: 'Remove' });
		fireEvent.click(removeButton);
		const expectedAction = removeIngredient('Tomato');
		expect(store.dispatch).toHaveBeenCalledWith(expectedAction);
	});
});
