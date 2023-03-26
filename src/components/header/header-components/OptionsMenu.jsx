import { useState, useRef } from 'react';

import { Dropdown, IconButton } from 'gestalt';

const OptionsMenu = () => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState(null);
	const anchorRef = useRef(null);

	const onSelect = ({ item }) => {
		if (selected.some(({ value }) => value === item.value)) {
			setSelected((selectedValue) =>
				selectedValue.filter(({ value }) => value !== item.value)
			);
		} else {
			setSelected((selectedValue) => [...selectedValue, item]);
		}
	};

	return (
		<div>
			<IconButton
				accessibilityLabel='options menu'
				bgColor='transparent'
				className='ellipsis-icon'
				icon='ellipsis'
				iconColor='white'
				onClick={() => setOpen((prevVal) => !prevVal)}
				ref={anchorRef}
				selected={open}
			>
				{open && (
					<Dropdown
						anchor={anchorRef.current}
						id='dropdown'
						onDismiss={() => setOpen(false)}
					>
						<Dropdown.Section label='Options'>
							<Dropdown.Item
								onSelect={onSelect}
								option={{
									value: 'Add to favorites',
									label: 'Add to favorites',
								}}
								selected={selected}
							/>
						</Dropdown.Section>
					</Dropdown>
				)}
			</IconButton>
		</div>
	);
};

export default OptionsMenu;
