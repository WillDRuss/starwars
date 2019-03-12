import React from 'react';

const Character = ({ name, gender, birth_year, mass, height, films, vehicles, starships }) => {
	return (
		<div className = 'tc bg-black gold ba br4 b--gold pa2 ma2 fl w-40 w-30-m w-20-l flex flex-column justify-between grow shadow5'>
				<h2>{ name }</h2>
				<ul className = 'list mw5 pa2 ba br3 b--gold center'>
					<li><em>Gender:</em> { gender }</li>
					<li><em>Birth year:</em> { birth_year }</li>
					<li><em>Mass:</em> { mass } kg</li>
					<li><em>Height:</em> { height } cm</li>
					<li><em>Films appeared in:</em> { films }</li>
					<li><em>Vehicles driven:</em> { vehicles }</li>
					<li><em>Starships flown:</em> { starships }</li>
				</ul>
		</div>
		)
}

export default Character;
