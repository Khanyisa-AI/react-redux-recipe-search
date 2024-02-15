import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Recipe from './Recipe';

describe('RecipeList component', () => {
	const recipes = {
		recipe: {
			label: 'Recipe 2',
			image: 'image1',
			ingredientLines: ['ingredientLines'],
		},
	};

	it('should render without errors', () => {
		render(<Recipe recipeData={recipes} />);
		const recipeComponent = screen.getByTestId('recipe-card');
		expect(recipeComponent).toBeInTheDocument();
	});
});
