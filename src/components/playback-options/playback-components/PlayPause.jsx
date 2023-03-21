import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayPause = () => {
	return (
		<div>
			<FontAwesomeIcon
				icon={faPlay}
				// Todo: add function to change play to pause on click
			/>
		</div>
	);
};

export default PlayPause;
