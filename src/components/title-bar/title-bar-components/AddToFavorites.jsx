import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AddToFavorites = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faPlus} className='addBtn' />
		</div>
	);
};

export default AddToFavorites;
