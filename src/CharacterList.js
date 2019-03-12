import React from 'react';
import Character from './Character';

const CharacterList = ({ people }) => {
	return (
		<div className='flex flex-wrap justify-around' style={{'marginTop': '150px'}}>
			{
				people.map((user, i) => {
					return (
						<Character 
							key={i} 
							name={people[i].name} 
							birth_year={people[i].birth_year}
							gender={people[i].gender} 
							mass={people[i].mass}
							height={people[i].height}
							films={people[i].films.length}
							vehicles={people[i].vehicles.length}
							starships={people[i].starships.length}
						/>
					)
				})
			}
		</div>
	);
}

export default CharacterList;
