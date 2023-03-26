import { IconButton } from 'gestalt';

function DropdownMenu({ handleToggle }) {
	return (
		<div>
			<IconButton
				className='dropdown-icon'
				bgColor='transparent'
				icon='arrow-down'
				iconColor='white'
				onClick={handleToggle}
			/>
		</div>
	);
}

export default DropdownMenu;
