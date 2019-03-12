import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2 w-33'>
			<input 
				className='pa2 ba br2 b--gold bg-white w-100'
				type='search' 
				placeholder='search characters by name' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;