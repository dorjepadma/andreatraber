
import React from 'react';

import Hung from '../../assets/images/hung.jpeg';

import './homepage.styles.scss';


const Homepage = () => {
  return (
    <div container className='homepage'>
      <div  className='Title'>
          <h1> Andrea Traber</h1>
      </div>
        <div className='subTitle'> Visions of the 5 elements
      </div>
      <div >
      <img className='img-fluid shadow-4' src={Hung} alt='Andreas paintings'/>
      </div>
    </div>
  );
}
export default Homepage;
