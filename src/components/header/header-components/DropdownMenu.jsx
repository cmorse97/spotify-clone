import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function DropdownMenu({ handleToggle }) {
	return (
		<div>
			<FontAwesomeIcon
				className='dropdown-icon'
				icon={faAngleDown}
				onClick={handleToggle}
			/>
		</div>
	);
}

export default DropdownMenu;
