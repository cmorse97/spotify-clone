import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

const Repeat = () => {
	return (
		<div className='repeat-option'>
			<FontAwesomeIcon icon={faRepeat} className='repeatBtn' />
		</div>
	);
};

export default Repeat;
