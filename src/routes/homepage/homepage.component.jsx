
import React from 'react';
import HomepageCarousel from './homepageCarousel.component';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBContainer
} from 'mdb-react-ui-kit';

import Hung from '../../assets/images/hung.jpeg';
import ThatsHow from '../../assets/images/ThatsHow.jpg';
import Ribbit from '../../assets/images/Ribbit.jpg';

import './homepage.styles.scss';


const Homepage = () => {
  return (
    <div className='homepage'>
      <div  className='Title'>
          <h1> Visions of the Five Elements</h1>
      </div>
      <div className='frontPiece'>
      <HomepageCarousel />
      </div>
    </div>
  );
}
export default Homepage;
