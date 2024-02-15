export function checkForDuplicate(ingredientList, ingredient) {
	let variations = [
		ingredient.toLowerCase(),
		ingredient + 's',
		ingredient + 'es',
		ingredient.replace(/s$/, ''),
		ingredient.replace(/es$/, ''),
	];
	variations = variations.map((item) => item.toLowerCase());
	return ingredientList.some((item) => variations.includes(item.toLowerCase()));
}
