import React from 'react';
import './Navbar.css';

const Navbar = (props) => {
	return (
		<div id="navbar" className='b--gold ba br2'>
			{props.children}
		</div>
	)
}


export default Navbar;