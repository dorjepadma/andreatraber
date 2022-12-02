
import React from 'react';

import {
  MDBCarousel,
  MDBCarouselItem,
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
      <div className='frontPieceContainer'>
      <MDBCarousel fade className='collectionsCarousel' interval={1000}>
      <div className="col-lg-12">
      <MDBCarouselItem
        className='w-100 d-block active'
        itemID={0}
      >
      <img src={Hung} className='img-fluid shadow-4'   alt='the painting hung from the View collection' />
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemID={1}
      >
      <img src={ThatsHow} className='img-fluid shadow-4' alt='Thats how the light gets in from the Expressions collection' />
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemID={2}
      >
      <img src={Ribbit} className='img-fluid shadow-4' alt='Ribbit from the Nature is Medicine collection' />
      </MDBCarouselItem>
      </div>
    </MDBCarousel>
      </div>
    </div>
  );
}
export default Homepage;
