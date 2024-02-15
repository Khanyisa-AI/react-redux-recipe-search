import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ErrorModal from './ErrorModal';
import { testStore, renderWithStore } from '../../redux/testStoreUtils';
import { rootReducer } from '../../redux/reducers/rootReducer';
import { setIsSearchComplete } from '../../redux/actions/searchActions';

describe('ErrorModal component', () => {
	let store;
	beforeEach(() => {
		const initialState = {
			search: {
				recipes: [],
				error: true,
				isSearchComplete: true,
			},
		};
		store = testStore(rootReducer, initialState);
	});

	it('renders "Something went wrong"', () => {
		renderWithStore(<ErrorModal />, store);
		const noRecipesTitle = screen.getByText('Something went wrong');
		const modifySearchMessage = screen.getByText(
			'Oops! Something unexpected occurred. Please give it another shot.'
		);

		expect(noRecipesTitle).toBeInTheDocument();
		expect(modifySearchMessage).toBeInTheDocument();
	});

	it('dispatches setIsSearchComplete when OK button is clicked', () => {
		store.dispatch = jest.fn();
		renderWithStore(<ErrorModal />, store);
		const okButton = screen.getByRole('button', { name: 'OK' });

		fireEvent.click(okButton);

		expect(store.dispatch).toHaveBeenCalledWith(setIsSearchComplete(false));
	});
});
