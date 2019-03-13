import React from 'react';
import Planets from '../components/Planets';

const PlanetList = ({ planets }) => {
	return(
		
		<div className='planet_container center'>
			
			{
				planets.map((user, i) => {
					return(
						<Planets 
							key={i}
							image={planets[i].name}
                            name={planets[i].name}
                            climate={planets[i].climate}
							terrain={planets[i].terrain}
							population={planets[i].population}
						/>
					);
				})
			}
		</div>
	);
}

export default PlanetList;
