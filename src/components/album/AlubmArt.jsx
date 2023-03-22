import { Box } from '@mui/material';

// Todo: Connect spotify api and display album art data

const AlubmArt = () => {
	return (
		<div className='album-art'>
			<Box
				sx={{
					width: 400,
					height: 400,
					backgroundColor: 'lightgray',
					color: 'black',
				}}
			>
				Album Art
			</Box>
		</div>
	);
};

export default AlubmArt;
