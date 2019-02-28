import React from 'react';
import Character from './Character';

const CharacterList = ({ people }) => {
	return (
		<div className = 'flex flex-wrap'>
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
						/>
					)
				})
			}
		</div>
	);
}

export default CharacterList;
