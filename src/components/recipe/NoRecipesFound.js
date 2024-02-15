import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Typography, Box } from '@mui/material';
import { setIsSearchComplete } from '../../redux/actions/searchActions';
import './NoRecipesFound.css';

const NoRecipesFound = () => {
	const dispatch = useDispatch();

	const handleOkClick = () => {
		dispatch(setIsSearchComplete(false));
	};

	return (
		<div className='no-recipes-modal' data-testid='no-recipes-found'>
			<div className='modal-content'>
				<Box textAlign='center' p={2}>
					<Typography variant='h6'>No recipes found.</Typography>
					<Button variant='contained' color='primary' onClick={handleOkClick}>
						OK
					</Button>
				</Box>
			</div>
		</div>
	);
};

export default NoRecipesFound;
