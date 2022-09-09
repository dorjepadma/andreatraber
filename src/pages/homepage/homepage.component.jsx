
import Hung from '../../assets/images/hung.jpeg';

import React from 'react';
import './homepage.styles.scss';


const Homepage = () => {
  return (
    <div className="homepage">
    <div container className='pageHeader' col='2'>
        <h1> Andrea Traber</h1>
      </div>
        <div className='subTitle'> Visions of the 5 elements
        </div>

      <img className='homePageImage' src={Hung} alt='Andreas paintings'>

      </img>
    </div>
  );
}
export default Homepage;
