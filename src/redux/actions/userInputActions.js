export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const UPDATE_QUERY = 'UPDATE_QUERY';
export const CURRENT_INGREDIENT = 'CURRENT_INGREDIENT';
export const REMOVE_ALL_INGREDIENT = 'REMOVE_ALL_INGREDIENT';

export const addIngredient = (ingredient) => ({
	type: ADD_INGREDIENT,
	payload: ingredient,
});

export const removeIngredient = (ingredient) => ({
	type: REMOVE_INGREDIENT,
	payload: ingredient,
});

export const setQuery = (query) => ({
	type: UPDATE_QUERY,
	payload: query,
});

export const setCurrentIngredient = (ingredient) => ({
	type: CURRENT_INGREDIENT,
	payload: ingredient,
});
