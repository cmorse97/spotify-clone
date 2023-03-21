import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

const OptionsMenu = ({ handleToggle }) => {
	return (
		<div>
			<FontAwesomeIcon
				className='ellipsis-icon'
				icon={faEllipsis}
				onClick={handleToggle}
			/>
		</div>
	);
};

export default OptionsMenu;
