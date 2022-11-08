import React, { useState } from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,


} from 'mdb-react-ui-kit';

import './paintingCard.styles.scss' 


const PaintingCard = ({ painting }) => {
  const {    imageUrl, size, collection, price, media, name } = painting;

  const [fullscreenXlModal, setFullscreenXlModal] = useState(false);
  const toggleShow = () => setFullscreenXlModal(!fullscreenXlModal);
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
              <MDBBtn onClick={toggleShow}>View Painting</MDBBtn>

              <MDBModal tabIndex='-1' show={fullscreenXlModal} setShow={setFullscreenXlModal}>
                <MDBModalDialog centered size='fullscreen-xl-down'>
                  <MDBModalContent>
                    <MDBModalHeader>
                      <MDBModalTitle className='modalPaintingTitle'>{name}</MDBModalTitle>
                      <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody>
                      <img className= 'paintingImage'src = {imageUrl} alt={`${name}`}/>

                    </MDBModalBody>
                    <MDBModalFooter>
                      <MDBBtn color='secondary' onClick={toggleShow}>
                        Close
                      </MDBBtn>
                    </MDBModalFooter>
                  </MDBModalContent>
                </MDBModalDialog>
              </MDBModal>
            </div>
            </MDBCard>
        </div>
      </div>
 
  </div>
  );
}

export default PaintingCard;


