import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	List,
	ListItem,
	ListItemText,
	IconButton,
	Typography,
} from '@mui/material';
import { removeIngredient } from '../../redux/actions/userInputActions';

const IngredientList = () => {
	const ingredients = useSelector((state) => state.userInput.ingredients);
	const dispatch = useDispatch();

	const handleRemoveIngredient = (ingredient) => {
		dispatch(removeIngredient(ingredient));
	};

	return (
		<>
			<Typography variant='h6' gutterBottom>
				Ingredients
			</Typography>
			<List>
				{ingredients.map((ingredient) => (
					<ListItem key={ingredient}>
						<ListItemText
							primary={ingredient}
							style={{ border: '2px solid grey' }}
						/>
						<IconButton
							style={{ color: 'black' }}
							onClick={() => handleRemoveIngredient(ingredient)}>
							<span role='img' aria-label='Remove'>
								x
							</span>
						</IconButton>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default IngredientList;
