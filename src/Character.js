import React from 'react';

const Character = ({ name, birth_year, gender, mass, height }) => {
	return (
		<div className = 'tc bg-black gold ba br4 b--gold pa2 ma2 fl w-40 w-30-ns flex flex-column justify-between grow shadow5'>
				<h2>{ name }</h2>
				<ul className = 'list mw5 pa2 ba br3 b--gold center'>
					<li><em>Birth year:</em> { birth_year }</li>
					<li><em>Gender:</em> { gender }</li>
					<li><em>Mass:</em> { mass } kg</li>
					<li><em>Height:</em> { height } cm</li>
				</ul>
		</div>
		)
}

export default Character;
