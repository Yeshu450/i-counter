import React from 'react';
import counter from '../assets/counter.png';

function Header() {
	return (
		<div id='header'>
			<h1>INTERACTIVE</h1> <h1>C<img src={counter} alt='O' width='30' />UNTER</h1>
		</div>
	);
}

export default Header;
