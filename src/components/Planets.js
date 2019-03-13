import React from 'react';

  
const Planets = ({ name, climate, terrain, population, image }) => {

    try {
        require(`../images/${image}.jpg`)
      }
      catch(err) {
        console.log('no picture found');
      }
      

    return (
        <article className="mw9 ph3-ns bg-transparent br3 pa4-ns mv3 tc ba b--white-10 center pa2">
            <div className="center">
                <img src ={require(`../images/${image}.jpg`)} style={{height: '150px', width: 'auto'}} alt="planet" className="br-100 h3 w3 mt0 center v-mid" title="Planet Photo"/>
                <h1 className=" tc bb bw1 b--white-10">{name}</h1>
            </div>
            <p className="lh-copy measure center f6 white-70 tc">Climate: {climate}</p>
            <p className="lh-copy measure center f6 white-70 tc">Terrain: {terrain}</p>
            <p className="lh-copy measure center f6 white-70 tc">Population: {population}</p>
        </article>
    );
}
export default Planets;

