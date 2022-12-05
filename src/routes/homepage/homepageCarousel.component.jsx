import React from 'react';

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBContainer
} from 'mdb-react-ui-kit';

import Hung from '../../assets/images/hung.jpeg';
import ThatsHow from '../../assets/images/ThatsHow.jpg';
import Ribbit from '../../assets/images/Ribbit.jpg';

import './homepageCarousel.styles.scss';


const HomepageCarousel = () => {
  return (

      <MDBContainer className='frontPieceContainer'>
      <MDBCarousel fade className='homeCarousel' interval={1600}>
    
      <MDBCarouselItem
        className='w-100 d-block active'
        itemID={0}
      >
      <img src={Hung} className='andreaImage'   alt='the painting hung from the View collection' />
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemID={1}
      >
      <img src={ThatsHow} className='andreaImage' alt='Thats how the light gets in from the Expressions collection' />
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemID={2}
      >
      <img src={Ribbit} className='andreaImage' alt='Ribbit from the Nature is Medicine collection' />
      </MDBCarouselItem>
   
    </MDBCarousel>
      </MDBContainer>
   
  );
}
export default HomepageCarousel;
