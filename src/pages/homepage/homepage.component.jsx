
import Hung from '../../assets/images/hung.jpeg';

import React from 'react';
import './homepage.styles.scss';


const Homepage = () => {
  return (
    <div container className='homepage'>
      <div  className='pageHeader'>
          <h1> Andrea Traber</h1>
      </div>
        <div className='subTitle'> Visions of the 5 elements
      </div>
      <img className='homePageImage' src={Hung} alt='Andreas paintings'/>
    </div>
  );
}
export default Homepage;
