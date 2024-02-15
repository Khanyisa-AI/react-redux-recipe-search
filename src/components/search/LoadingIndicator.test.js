import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { testStore, renderWithStore } from '../../redux/testStoreUtils';
import { rootReducer } from '../../redux/reducers/rootReducer';
import LoadingIndicator from './LoadingIndicator';

describe('LoadingIndicator', () => {
	it('should render without errors', () => {
		const initialState = {
			search: {
				loading: false,
			},
		};
		const store = testStore(rootReducer, initialState);
		renderWithStore(<LoadingIndicator />, store);
		const loadingIndicator = screen.getByTestId('loading-indicator');
		expect(loadingIndicator).toBeInTheDocument();
	});
	it('shows loading indicator when recipes are loading', () => {
		const initialState = {
			search: {
				loading: true,
			},
		};

		const store = testStore(rootReducer, initialState);
		renderWithStore(<LoadingIndicator />, store);
		const loadingIndicator = screen.getByTestId('loading-indicator');
		expect(loadingIndicator).toHaveStyle({ visibility: 'visible' });
	});

	it('does not show loading indicator when recipes are not loading', () => {
		const initialState = {
			search: {
				loading: false,
			},
		};

		const store = testStore(rootReducer, initialState);
		renderWithStore(<LoadingIndicator />, store);
		const loadingIndicator = screen.getByTestId('loading-indicator');
		expect(loadingIndicator).toHaveStyle({ visibility: 'hidden' });
	});
});
