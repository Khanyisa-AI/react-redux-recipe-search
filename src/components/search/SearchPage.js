import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import {
	addIngredient,
	setCurrentIngredient,
	setQuery,
} from '../../redux/actions/userInputActions';
import { searchRecipes } from '../../redux/thunks/searchThunks';
import { checkForDuplicate } from '../../utils/helperFunctions';
import IngredientList from './IngredientList';
import LoadingIndicator from './LoadingIndicator';
import './SearchPage.css';

const SearchPage = () => {
	const query = useSelector((state) => state.userInput.query);
	const ingredients = useSelector((state) => state.userInput.ingredients);
	const currentIngredient = useSelector(
		(state) => state.userInput.currentIngredient
	);
	const dispatch = useDispatch();

	const handleRecipeQueryChange = (event) => {
		dispatch(setQuery(event.target.value.trim()));
	};

	const handleOnchange = (value) => {
		dispatch(setCurrentIngredient(value.trim()));
	};

	const handleAddIngredient = () => {
		if (query === '') {
			alert('Please enter a meal before adding ingredients.');
			return;
		}
		if (checkForDuplicate(ingredients, currentIngredient)) {
			alert(
				'This ingredient has already been added, add a different ingredient.'
			);
			return;
		}
		if (currentIngredient !== '') {
			dispatch(addIngredient(currentIngredient));
			dispatch(setCurrentIngredient(''));
		}
	};

	const handleSearchClick = () => {
		dispatch(searchRecipes(query, ingredients));
	};

	return (
		<div className='background-image'>
			<Paper elevation={9} className='paper-container'>
				<Typography variant='h5' align='center' gutterBottom>
					Recipe Search
				</Typography>
				<TextField
					label='Meal'
					value={query}
					onChange={handleRecipeQueryChange}
					fullWidth
					sx={{ marginBottom: '20px' }}
				/>

				<TextField
					label='Add Ingredient'
					fullWidth
					value={currentIngredient}
					onChange={(event) => {
						handleOnchange(event.target.value);
					}}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<Button variant='contained' onClick={handleAddIngredient}>
									Add
								</Button>
							</InputAdornment>
						),
					}}
					sx={{ marginBottom: '16px' }}
				/>

				{ingredients.length > 0 && <IngredientList />}
				<div
					style={{
						display: 'flex',
						justifyContent: 'right',
						alignItems: 'center',
					}}>
					<Button
						variant='contained'
						onClick={handleSearchClick}
						sx={{
							marginBottom: '16px',
							alignItems: 'center',
							justifyContent: 'center',
						}}>
						Search
					</Button>
				</div>
			</Paper>
			<LoadingIndicator />
		</div>
	);
};

export default SearchPage;
