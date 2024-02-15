const API_KEY = process.env.REACT_APP_API_KEY;
const APP_ID = process.env.REACT_APP_ID;

export const API_URL = 'https://api.edamam.com/api/recipes/v2';

export const fetchRecipes = async (query, listOfIngredients) => {
	const params = new URLSearchParams({
		type: 'public',
		q: [query,...listOfIngredients].join(' '),
		app_id: process.env.REACT_APP_ID,
		app_key: API_KEY,
	});
	
	const url = `${API_URL}?${params}`;

	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`HTTP error! Status: ${response.status}`);
	}
	const data = await response.json();
	return data.hits;
};
