
import AndreaImage from '../../assets/images/AndreaTraber.png';

import React from 'react';
import './andrea.styles.scss';


const Andrea = () => {
  return (
    <div className="homepage">
      <div className='titleContainer'>
        <div className='title'>
          <h1>Andrea Traber</h1>
        </div>
        <div className='subTitle'> Unfolding Wisdom through paint, brush, and dance.
        </div>
      </div>
      <img className='homePageImage' src={AndreaImage} alt='Andrea'>

      </img>
    </div>
  );
}
export default Andrea;
