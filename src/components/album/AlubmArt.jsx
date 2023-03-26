import axios from 'axios';

import { Box } from 'gestalt';

// Todo: Connect spotify api and display album art data

const AlubmArt = () => {
	const options = {
		method: 'GET',
		url: 'https://spotify23.p.rapidapi.com/album_tracks/',
		params: { id: '3IBcauSj5M2A6lTeffJzdv', offset: '0', limit: '3' },
		headers: {
			'X-RapidAPI-Key': '688a2fcb38msh2b16bffbb296e4ap1feba0jsnfb83c8a6d83f',
			'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		},
	};

	axios
		.request(options)
		.then((res) => console.log(res.data))
		.catch((err) => console.log(err));

	return (
		<Box
			rounding={2}
			width='70%'
			height={400}
			color='transparentDarkGray'
			display='flex'
			alignItems='center'
			justifyContent='center'
			margin='auto'
			marginBottom={8}
		>
			Album
		</Box>
	);
};

export default AlubmArt;
