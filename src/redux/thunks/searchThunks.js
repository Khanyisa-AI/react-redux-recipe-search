import {
	searchRequest,
	searchSuccess,
	searchFailure,
	setIsSearchComplete,
} from '../actions/searchActions';
import { fetchRecipes } from '../../utils/api';

export const searchRecipes = (query, ingredients) => {
	return async (dispatch) => {
		dispatch(searchRequest());
		try {
			const recipes = await fetchRecipes(query, ingredients);
			dispatch(searchSuccess(recipes));
		} catch (error) {
			dispatch(searchFailure(error.message));
		} finally {
			dispatch(setIsSearchComplete(true));
		}
	};
};
