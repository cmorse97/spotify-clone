import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-solid-svg-icons';

const PlayPause = () => {
	const [isPaused, setIsPaused] = useState(false);

	return (
		<div>
			<FontAwesomeIcon
				onClick={() => setIsPaused(!isPaused)}
				className='play-pause-icon'
				fontSize={48}
				icon={!isPaused ? faCirclePlay : faCirclePause}
			/>
		</div>
	);
};

export default PlayPause;
