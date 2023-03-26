import { useState } from 'react';
import axios from 'axios';

import { Flex, SearchField } from 'gestalt';
import 'gestalt/dist/gestalt.css';

const SearchBar = () => {
	const [value, setValue] = useState('');

	const options = {
		method: 'GET',
		url: 'https://spotify23.p.rapidapi.com/search/',
		params: {
			q: '<REQUIRED>',
			type: 'multi',
			offset: '0',
			limit: '10',
			numberOfTopResults: '5',
		},
		headers: {
			'X-RapidAPI-Key': '688a2fcb38msh2b16bffbb296e4ap1feba0jsnfb83c8a6d83f',
			'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
		},
	};

	axios
		.request(options)
		.then((res) => console.log(res.data))
		.catch((err) => console.error(err));

	return (
		<Flex>
			<SearchField
				accessibilityLabel='Search for songs, albums, or artists'
				accessibilityClearButtonLabel='Clear search field'
				id='searchInput'
				onChange={({ value }) => setValue(value)}
				placeholder='Search for music...'
				type='text'
				size='md'
			/>
		</Flex>
	);
};

export default SearchBar;
