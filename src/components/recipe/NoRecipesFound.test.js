import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoRecipesFound from './NoRecipesFound';
import { setIsSearchComplete } from '../../redux/actions/searchActions';
import { testStore, renderWithStore } from '../../redux/testStoreUtils';
import { rootReducer } from '../../redux/reducers/rootReducer';

describe('NoRecipesFound Component', () => {
	let store;
	beforeEach(() => {
		const initialState = {
			search: {
				recipes: [],
				error: null,
				isSearchComplete: true,
			},
		};
		store = testStore(rootReducer, initialState);
	});

	it('should render without errors', () => {
		renderWithStore(<NoRecipesFound />, store);
		const okButton = screen.getByText('OK');
		const noRecipesFound = screen.getByTestId('no-recipes-found');
		expect(noRecipesFound).toBeInTheDocument();
		expect(okButton).toBeInTheDocument();
	});

	it('dispatches setIsSearchComplete when OK button is clicked', () => {
		store.dispatch = jest.fn();
		renderWithStore(<NoRecipesFound />, store);
		const okButton = screen.getByText('OK');
		fireEvent.click(okButton);
		expect(store.dispatch).toHaveBeenCalledWith(setIsSearchComplete(false));
	});
});
