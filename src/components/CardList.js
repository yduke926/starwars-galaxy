import React from 'react';
import Cards from './Cards';

const CardList = ({ starships }) => {
    return (
        <div>
            {
                starships.map((user, i) => {
                    return (
                        <Cards 
                            key={i}
                            name={starships[i].name}
                            model={starships[i].model}
                            image={starships[i].name}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;