import { useSelector, useDispatch } from 'react-redux';
import {
	Dialog,
	DialogTitle,
	DialogContent,
	DialogActions,
	Button,
} from '@mui/material';
import { setIsSearchComplete } from '../../redux/actions/searchActions';

const ErrorModal = () => {
	const isSearchComplete = useSelector(
		(state) => state.search.isSearchComplete
	);
	const dispatch = useDispatch();
	const onClose = () => {
		dispatch(setIsSearchComplete(false));
	};

	return (
		<Dialog open={isSearchComplete} onClose={onClose}>
			<DialogTitle>Something went wrong</DialogTitle>
			<DialogContent>
				Oops! Something unexpected occurred. Please give it another shot.
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>OK</Button>
			</DialogActions>
		</Dialog>
	);
};

export default ErrorModal;
