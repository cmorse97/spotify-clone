import { useState } from 'react';
import { IconButton } from 'gestalt';

const PlayPause = () => {
	const [isPaused, setIsPaused] = useState(false);

	return (
		<div>
			<IconButton
				onClick={() => setIsPaused(!isPaused)}
				className='play-pause-icon'
				iconColor='white'
				bgColor='transparent'
				icon={!isPaused ? 'play' : 'pause'}
				size='xl'
			/>
		</div>
	);
};

export default PlayPause;
