import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

const ShareOptions = () => {
	return (
		<div className='share-options'>
			<FontAwesomeIcon icon={faArrowUpFromBracket} className='shareBtn' />
		</div>
	);
};

export default ShareOptions;
