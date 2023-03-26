import { useState } from 'react';

import { IconButton } from 'gestalt';

const SoundOption = () => {
	const [isMuted, setIsMuted] = useState(false);

	return (
		<div className='shuffle-play'>
			<IconButton
				icon={!isMuted ? 'sound' : 'mute'}
				iconColor='white'
				bgColor='transparent'
				size='sm'
				onClick={() => setIsMuted(!isMuted)}
			/>
		</div>
	);
};

export default SoundOption;
