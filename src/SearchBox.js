import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
				className='pa3 ba br2 b--gold bg-white w-33'
				type='search' 
				placeholder='search characters by name' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;