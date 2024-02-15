import {
	SEARCH_REQUEST,
	SEARCH_SUCCESS,
	SEARCH_FAILURE,
	SEARCH_COMPLETE,
} from '../actions/searchActions';

const initialState = {
	recipes: [],
	loading: false,
	error: null,
	isSearchComplete: false,
};

export const searchReducer = (state = initialState, action) => {

	switch (action.type) {
		case SEARCH_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case SEARCH_SUCCESS:
			return {
				...state,
				recipes: action.payload,
				isSearchComplete: true,
				loading: false,
				error: null,
			};
		case SEARCH_FAILURE:
			return {
				...state,
				loading: false,
				isSearchComplete: true,
				error: action.payload,
			};
		case SEARCH_COMPLETE:
			
			return {
				...state,
				isSearchComplete: action.payload,
			};
		default:
			return state;
	}
};
