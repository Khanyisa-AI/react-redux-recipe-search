import '@testing-library/jest-dom/extend-expect';
import { screen } from '@testing-library/react';
import { testStore, renderWithStore } from '../../redux/testStoreUtils';
import RecipeList from './RecipeList';
import { rootReducer } from '../../redux/reducers/rootReducer';

describe('RecipeList component', () => {
	it('renders "Your recipes will appear here" message when no recipes are available', () => {
		const initialState = {
			search: {
				recipes: [],
			},
		};
		let store = testStore(rootReducer, initialState);
		renderWithStore(<RecipeList />, store);
		const messageElement = screen.getByText('Your recipes will appear here');
		expect(messageElement).toBeInTheDocument();
	});

	it('renders recipe card when recipes are available', () => {
		const recipes = [
			{
				recipe: {
					label: 'Recipe 2',
					image: 'image1',
					ingredientLines: ['ingredientLines'],
				},
			},
		];

		const initialState = {
			search: {
				recipes: recipes,
			},
		};

		let store = testStore(rootReducer, initialState);
		renderWithStore(<RecipeList />, store);
		const recipeTitle1 = screen.getByTestId('recipe-card');
		expect(recipeTitle1).toBeInTheDocument();
	});
});
