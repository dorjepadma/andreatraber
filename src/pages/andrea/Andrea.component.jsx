
import AndreaImage from '../../assets/images/AndreaTraber.png';

import React from 'react';
import './andrea.styles.scss';


const Andrea = () => {
  return (
    <div className="andreaContainer">
     
        <div className='andreaHero'>
        <div className='andreaTitle'>
          <h1>Andrea Traber</h1>
        </div>
        </div>
        <div className='subTitle'> Unfolding Wisdom through paint, brush, and dance.
        </div>
    
      <img className='homePageImage' src={AndreaImage} alt='Andrea'>

      </img>
    </div>
  );
}
export default Andrea;
