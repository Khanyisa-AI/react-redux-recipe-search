import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import SearchPage from './components/search/SearchPage';
import RecipeList from './components/recipe/RecipeList';
import ScrollToTopButton from './components/page-navigation/ScrollToTopButton';

const App = () => {
	return (
		<Provider store={store}>
			<SearchPage />
			<RecipeList />
			<ScrollToTopButton />
		</Provider>
	);
};

export default App;
