import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
	margin: theme.spacing(2),
	border: `1px solid ${theme.palette.divider}`,
	[theme.breakpoints.up('md')]: {
		display: 'flex',
	},
}));

const Recipe = ({ recipeData }) => {
	const { label, image, ingredientLines } = recipeData.recipe;

	return (
		<StyledCard data-testid='recipe-card'>
			<Grid container>
				<Grid item xs={12} md={3}>
					<CardMedia component='img' image={image} alt={label} />
				</Grid>
				<Grid item xs={12} md={9}>
					<CardContent>
						<Typography variant='h6' component='div'>
							{label}
						</Typography>
						<Typography variant='body2' color='text.secondary'>
							Ingredients:
						</Typography>
						<ul>
							{ingredientLines.map((ingredient, index) => (
								<li key={index}>{ingredient}</li>
							))}
						</ul>
					</CardContent>
				</Grid>
			</Grid>
		</StyledCard>
	);
};

export default Recipe;
