import DropdownMenu from './header-components/DropdownMenu';
import OptionsMenu from './header-components/OptionsMenu';
import SearchBar from './header-components/SearchBar';

import { Box } from 'gestalt';

function Header({ handleToggle }) {
	return (
		<Box
			display='flex'
			alignItems='center'
			justifyContent='between'
			marginBottom={8}
		>
			<DropdownMenu handleToggle={handleToggle} />
			<SearchBar />
			<OptionsMenu />
		</Box>
	);
}

export default Header;
