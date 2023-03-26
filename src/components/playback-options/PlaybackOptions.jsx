import SoundOption from './playback-components/SoundOption';
import PlayPause from './playback-components/PlayPause';
import NextSong from './playback-components/NextSong';
import PrevSong from './playback-components/PrevSong';
import Repeat from './playback-components/Repeat';

const PlaybackOptions = () => {
	return (
		<div className='playback-options'>
			<SoundOption />
			<PrevSong />
			<PlayPause />
			<NextSong />
			<Repeat />
		</div>
	);
};

export default PlaybackOptions;
