import React from 'react';
import Sky from '../../assets/images/CollectionsImages/Sky.png';
import {
  MDBCarousel,
  MDBCarouselElement,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
 
import './collections.styles.scss';

const Collections = () => {
  return (
    // <div className="collectionsContainer">
    //   <div className= 'collectionsText'>
    //     <div>
    //   <h1> Andrea's Collections </h1>
    //     </div>
    //     <div className='collections'>
        <MDBCarousel  showControls showIndicators>
            <MDBCarouselItem className='active'>
              <MDBCarouselElement
              className="collectionsCarousel"
              itemID={1}
              src={Sky}
              alt='Sky Painting'
            >
              <h5>Sky</h5>
              <p>This collection highlights a spacious mind.</p>
            </MDBCarouselElement>
          </MDBCarouselItem>
          <MDBCarouselItem className='active'>
              <MDBCarouselElement
              className="collectionsCarousel"
              itemID={1}
              src={Sky}
              alt='Sky Painting'
            >
              <h5>Fun</h5>
              <p>Playful and delightful paintings celebrating life.</p>
            </MDBCarouselElement>
          </MDBCarouselItem>
      {/* <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/new/slides/042.jpg'
        alt='...'
      >
        <h5>Fun</h5>
        <p>Playful and delightful paintings celebrating life</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      >
        <h5>Impressions</h5>
        <p>Contemplative paintings inspired by Impressionism</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      >
        <h5>Elements</h5>
        <p>Contemplative paintings inspired by Impressionism</p>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/new/slides/043.jpg'
        alt='...'
      >
        <h5>Calm</h5>
        <p>Contemplative paintings inspired by Impressionism</p>
      </MDBCarouselItem> */}
    </MDBCarousel>
    //     </div>
    //   </div>
    // </div>
  );

}
export default Collections;
