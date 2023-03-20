import AddToFavorites from './title-bar-components/AddToFavorites';
import Title from './title-bar-components/Title';

const TitleBar = () => {
	return (
		<div className='title-bar'>
			<Title />
			<AddToFavorites />
		</div>
	);
};

export default TitleBar;
