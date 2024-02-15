import { fetchRecipes } from './api';
import { API_URL } from './api';

describe('fetchRecipes', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	it('fetches recipes successfully', async () => {
		const mockResponse = {
			ok: true,
			json: jest.fn().mockResolvedValue({ hits: ['recipe1', 'recipe2'] }),
		};
		global.fetch = jest.fn().mockResolvedValue(mockResponse);

		const query = 'pasta';
		const listOfIngredients = ['tomato', 'cheese'];
		const recipes = await fetchRecipes(query, listOfIngredients);

		expect(recipes).toEqual(['recipe1', 'recipe2']);
		expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining(API_URL));
		expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining(query));
		listOfIngredients.forEach((ingredient) => {
			expect(global.fetch).toHaveBeenCalledWith(
				expect.stringContaining(ingredient)
			);
		});
	});

	it('handles fetch error', async () => {
		const mockResponse = {
			ok: false,
			status: 404,
		};
		global.fetch = jest.fn().mockResolvedValue(mockResponse);

		const query = 'salad';
		const listOfIngredients = ['lettuce', 'cucumber'];

		await expect(fetchRecipes(query, listOfIngredients)).rejects.toThrowError(
			'HTTP error! Status: 404'
		);
	});
});
