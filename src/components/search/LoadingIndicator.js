import { CircularProgress, Backdrop } from '@mui/material';
import { useSelector } from 'react-redux';

const LoadingIndicator = () => {
	const recipesLoading = useSelector((state) => state.search.loading);

	return (
		<Backdrop
			data-testid='loading-indicator'
			open={recipesLoading}
			style={{ zIndex: 9999 }}>
			<CircularProgress color='primary' />
		</Backdrop>
	);
};

export default LoadingIndicator;
