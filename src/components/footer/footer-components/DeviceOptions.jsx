import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons';

const DeviceOptions = () => {
	return (
		<div className='device-options'>
			<FontAwesomeIcon icon={faHeadphonesSimple} className='deviceBtn' />
		</div>
	);
};

export default DeviceOptions;
