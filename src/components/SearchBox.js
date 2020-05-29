import React from 'react';

const SearchBox = ({searchChange1}) => {
	return (
		<div className = 'pa2'>		
			 <input
			className = 'pa3 v=ba b--green bg-lightest-blue' 
			type ='search'
			 placeholder = 'search robots'
			 onChange={searchChange1}
			 />
		 </div> 
		);
}

export default SearchBox; 