import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardStep } from '@fortawesome/free-solid-svg-icons';

const NextSong = () => {
	return (
		<div>
			<FontAwesomeIcon icon={faForwardStep} className='nextBtn' />
		</div>
	);
};

export default NextSong;
