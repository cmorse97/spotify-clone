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
					<FontAwesomeIcon icon={faPlus} sx={{ m: 0.5 }} />
					Add to playlist
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<FontAwesomeIcon icon={faBars} /> Add to queue
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<FontAwesomeIcon icon={faArrowUpFromBracket} /> Share
				</MenuItem>
			</Menu>
		</div>
	);
};

export default OptionsMenu;
