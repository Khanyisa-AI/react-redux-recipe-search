import { checkForDuplicate } from './helperFunctions';

describe('checkForDuplicate', () => {
	it('should return true for a duplicate ingredient in the list', () => {
		const ingredientList = ['apple', 'banana', 'orange', 'apples'];
		const ingredient = 'Apple';
		const result = checkForDuplicate(ingredientList, ingredient);
		expect(result).toBe(true);
	});

	it('should return false for a non-duplicate ingredient in the list', () => {
		const ingredientList = ['apple', 'banana', 'orange', 'mango'];
		const ingredient = 'grape';
		const result = checkForDuplicate(ingredientList, ingredient);
		expect(result).toBe(false);
	});

	it('should handle plural variations correctly', () => {
		const ingredientList = ['apple', 'orange', 'apples'];
		const ingredient = 'apple';
		const result = checkForDuplicate(ingredientList, ingredient);
		expect(result).toBe(true);
	});

	it('should handle variations with "es" correctly', () => {
		const ingredientList = ['fish', 'bushes', 'matches'];
		const ingredient = 'match';
		const result = checkForDuplicate(ingredientList, ingredient);
		expect(result).toBe(true);
	});
});
