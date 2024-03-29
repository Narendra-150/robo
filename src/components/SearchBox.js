import React from 'react';
import 'tachyons';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--green bg-lightest-blue'
				type='search'
				placeholder='Search Robo'
				onChange={searchChange}
			/>
		</div>
		)
}

export default SearchBox