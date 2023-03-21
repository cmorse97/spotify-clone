import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const QueueMenu = () => {
	return (
		<div className='queue-menu'>
			<FontAwesomeIcon icon={faBars} className='queueBtn' />
		</div>
	);
};

export default QueueMenu;
