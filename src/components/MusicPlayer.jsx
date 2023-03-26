import { useState } from 'react';

import Header from './header/Header';
import AlubmArt from './album/AlubmArt';
import TitleBar from './title-bar/TitleBar';
import SongSlider from './song-slider/SongSlider';
import PlaybackOptions from './playback-options/PlaybackOptions';
import Footer from './footer/Footer';
import '../App.scss';

const MusicPlayer = () => {
	const [isPageActive, setIsPageActive] = useState('');

	const handleToggle = () => {
		isPageActive === 'minimized'
			? setIsPageActive('')
			: setIsPageActive('minimized');
	};

	return (
		<div className={isPageActive}>
			<Header handleToggle={handleToggle} />
			<AlubmArt />
			<TitleBar />
			<SongSlider />
			<PlaybackOptions />
			<Footer />
		</div>
	);
};

export default MusicPlayer;
