import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';

const PlayPause = () => {
	return (
		<div>
			<FontAwesomeIcon
				fontSize='large'
				icon={faCirclePlay}
				// Todo: add function to change play to pause on click
			/>
		</div>
	);
};

export default PlayPause;
