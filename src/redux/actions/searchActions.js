export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';
export const SEARCH_COMPLETE = 'SEARCH_COMPLETE';

export const searchRequest = () => ({
	type: SEARCH_REQUEST,
});

export const setIsSearchComplete = (complete) => ({
	type: SEARCH_COMPLETE,
	payload: complete,
});

export const searchSuccess = (recipes) => ({
	type: SEARCH_SUCCESS,
	payload: recipes,
});

export const searchFailure = (error) => ({
	type: SEARCH_FAILURE,
	payload: error,
});
