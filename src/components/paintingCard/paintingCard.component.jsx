import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';

import './paintingCard.styles.scss' 


const PaintingCard = ({ painting }) => {
  const {    imageUrl, size, collection, price, media, name } = painting;
  return (
  <div>
    <div className='paintingContainer'>
     
          <div >
            <MDBCard className='paintingCard'>    
            <MDBCardImage src={imageUrl} alt={`${name}`} position='top' className='paintingImage'/>
            <MDBCardBody>
              <MDBCardTitle className='paintingTitle'>{name}</MDBCardTitle>
              <MDBCardText className='paintingText'>{size} {'•'} {collection}</MDBCardText>
              <MDBCardText className='paintingText'>{media}</MDBCardText>
            </MDBCardBody>
            <div>
              <MDBBtn className='paintingButton'href={imageUrl}>View Painting</MDBBtn>
            </div>
            </MDBCard>
        </div>
      </div>
 
  </div>
  );
}

export default PaintingCard;


