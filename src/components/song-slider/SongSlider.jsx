import { useState } from 'react';

import styled from '@emotion/styled';
import { Box, Slider, Typography } from '@mui/material';

const TinyText = styled(Typography)({
	fontSize: '0.75rem',
	opacity: 0.38,
	fontWeight: 500,
	letterSpacing: 0.2,
});

const SongSlider = () => {
	const duration = 200;
	const [position, setPosition] = useState(32);
	const formatDuration = (value) => {
		const minute = Math.floor(value / 60);
		const secondLeft = value - minute * 60;
		return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
	};

	return (
		<div className='slider'>
			<Slider
				size='small'
				value={position}
				min={0}
				step={1}
				max={duration}
				onChange={(_, value) => setPosition(value)}
				sx={{
					color: '#fff',
					height: 4,
					'& .MuiSlider-thumb': {
						width: 12,
						height: 12,
						transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
						'&:before': {
							boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
						},
						'&:hover, &.Mui-focusVisible': {
							boxShadow: `0px 0px 0px 8px ${'rgba(0,0,0,0.4)'}`,
						},
						'&.Mui-active': {
							width: 20,
							height: 20,
						},
					},
					'& .MuiSlider-rail': {
						opacity: 0.28,
					},
				}}
			/>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					mt: -2,
				}}
			>
				<TinyText>{formatDuration(position)}</TinyText>
				<TinyText>-{formatDuration(duration - position)}</TinyText>
			</Box>
		</div>
	);
};

export default SongSlider;
