import DropdownMenu from './header-components/DropdownMenu';
import OptionsMenu from './header-components/OptionsMenu';
import PlaylistTitle from './header-components/PlaylistTitle';

function Header({ handleToggle }) {
	return (
		<div className='header'>
			<DropdownMenu handleToggle={handleToggle} />
			<PlaylistTitle />
			<OptionsMenu />
		</div>
	);
}

export default Header;
