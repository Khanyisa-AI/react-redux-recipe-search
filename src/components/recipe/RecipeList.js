import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Recipe from './Recipe';
import { setIsSearchComplete } from '../../redux/actions/searchActions';
import NoRecipesFound from './NoRecipesFound';
import ErrorModal from './ErrorModal';

const RecipeList = () => {
	const apiFailed = useSelector((state) => state.search.error);
	const recipes = useSelector((state) => state.search.recipes);
	const isSearchComplete = useSelector(
		(state) => state.search.isSearchComplete
	);
	const dispatch = useDispatch();

	if (!apiFailed && recipes.length === 0 && isSearchComplete) {
		return <NoRecipesFound className='recipe-list-container' />;
	} else if (apiFailed && isSearchComplete) {
		return <ErrorModal />;
	} else {
		dispatch(setIsSearchComplete(false));
		return (
			<div className='recipe-list-container'>
				{recipes.length > 0 ? (
					<div>
						<Typography
							variant='h4'
							align='center'
							sx={{ fontWeight: 'bold', marginTop: 2 }}>
							Recipes
						</Typography>
						<div>
							{recipes.map((recipe, index) => (
								<Recipe key={index} recipeData={recipe} />
							))}
						</div>
					</div>
				) : (
					<Typography variant='h5' align='center' sx={{ marginTop: 2 }}>
						Your recipes will appear here
					</Typography>
				)}
			</div>
		);
	}
};

export default RecipeList;
