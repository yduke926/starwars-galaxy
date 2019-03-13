import React from 'react';

const Cards = ({ name, model, image}) => {

    try {
        require(`../images/${image}.jpg`)
      }
      catch(err) {
        console.log('no picture found');
      }

    return (
        <div className='tc dib br3 pa3 ma2 grow bw2 shadow-5 ba .bw0 .b--white-40 br3 card'>
            <div>
            <img alt='ships' className='br3 grow bw2 shadow-5' src ={require(`../images/${image}.jpg`)} style={{height: '200px', width: '200px'}}/>
                <h2>{name}</h2>
                <p>{model}</p>
            </div>
        </div>
    );
}
export default Cards;

