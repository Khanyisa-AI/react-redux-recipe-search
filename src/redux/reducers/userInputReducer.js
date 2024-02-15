import {
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	UPDATE_QUERY,
	CURRENT_INGREDIENT,
} from '../actions/userInputActions';

const initialState = {
	query: '',
	ingredients: [],
	currentIngredient: '',
};

export const userInputReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_INGREDIENT:
			return {
				...state,
				ingredients: [...state.ingredients, action.payload],
			};
		case REMOVE_INGREDIENT:
			return {
				...state,
				ingredients: state.ingredients.filter(
					(ingredient) => ingredient !== action.payload
				),
			};
		
		case UPDATE_QUERY:
			return {
				...state,
				query: action.payload,
			};
		case CURRENT_INGREDIENT:
			return {
				...state,
				currentIngredient: action.payload,
			};
		default:
			return state;
	}
};
