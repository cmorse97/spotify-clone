import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from '@fortawesome/free-solid-svg-icons';

const ShufflePlay = () => {
	return (
		<div className='shuffle-play'>
			<FontAwesomeIcon icon={faShuffle} className='shuffleBtn' />
		</div>
	);
};

export default ShufflePlay;
