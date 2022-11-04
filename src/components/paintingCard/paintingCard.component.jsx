import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import './paintingCard.styles.scss' 


const PaintingCard = ({ painting }) => {
  const {  id, title, imageUrl, size, collection, price } = painting;
  return (
  <div>
    <div  showControls showIndicators fade className='paintingCarousel'>

    <div className="col-lg-12">
      <MDBCarouselItem
      className='w-100 d-block active'
    
      >
      <div className='paintingCard'
     >
   
        <MDBCardImage src={imageUrl} alt={`${title}`} position='top' className='paintingImage'/>
        <MDBCardBody>
          <MDBCardTitle className='paintingTitle'>{title}</MDBCardTitle>
          <MDBCardText>{size}</MDBCardText>
          <MDBCardText>{collection}</MDBCardText>
          <MDBCardText>${price}</MDBCardText>
        </MDBCardBody>
      {/* <div>
        <MDBBtn className='paintingButton'href={imageUrl}>View Painting</MDBBtn>
      </div> */}
      </div>
      </MDBCarouselItem>
      </div>
    </div>
    </div>
  );
}

export default PaintingCard;


