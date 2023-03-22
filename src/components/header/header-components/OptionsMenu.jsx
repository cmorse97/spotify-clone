import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEllipsis,
	faPlus,
	faBars,
	faArrowUpFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import { Menu, MenuItem } from '@mui/material';

const OptionsMenu = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (e) => {
		setAnchorEl(e.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<FontAwesomeIcon
				className='ellipsis-icon'
				icon={faEllipsis}
				onClick={handleClick}
			/>
			<Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
				<MenuItem onClick={handleClose}>
					<FontAwesomeIcon icon={faPlus} />
					Add to playlist
					{/* Todo: Add function to add song to playlist */}
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<FontAwesomeIcon icon={faBars} /> Add to queue
					{/* Todo: Add function to add song to queue */}
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<FontAwesomeIcon icon={faArrowUpFromBracket} /> Share
					{/* Todo: Add function to share song */}
				</MenuItem>
			</Menu>
		</div>
	);
};

export default OptionsMenu;
