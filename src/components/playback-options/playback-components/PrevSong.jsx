import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';

const PrevSong = () => {
	return (
		<div>
			<FontAwesomeIcon
				icon={faBackwardStep}
				fontSize={24}
				className='prevBtn'
			/>
		</div>
	);
};

export default PrevSong;
