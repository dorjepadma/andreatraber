import React from 'react';
import View from '../../assets/images/CollectionsImages/Sky.png';
import Expressions from '../../assets/images/CollectionsImages/liquid.png';
import Elements from '../../assets/images/CollectionsImages/fire2.jpeg';
import Sea from '../../assets/images/CollectionsImages/atsea2.jpeg';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
 
import './collections.styles.scss';

const Collections = () => {
  return (
    <div  className="collectionsContainer">
      <div className='collectionsTitle'>
        <h1> Andrea's Collections </h1>
      </div>
 
        <MDBCarousel  showControls showIndicators fade className='collectionsCarousel'>
        <div className="col-lg-12">
            <MDBCarouselItem 
              className='w-100 d-block active'
              itemID={0}
            >
            <MDBCard className='collectionCard'>
              <MDBCardImage src={View} position='top' alt='Painting fo the Sky' />
              <MDBCardBody>
                <MDBCardTitle>View</MDBCardTitle>
                <MDBCardText>
                This collection highlights a spacious mind. The sky is a place of freedom and imagination. It is a place of peace and tranquility. It is a place of endless possibilities. Through these paintings a serene meditative quality of mind is expressed. The result is transcendental experiences of contemplation. 
                </MDBCardText>
                <MDBBtn href='#'>View Collection</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem>
          <MDBCarouselItem 
              className="w-100 d-block"
              itemID={1}
            >
          <MDBCard className='collectionCard'>
              <MDBCardImage src={Expressions} position='top' alt='Painting fo the Sky'  />
              <MDBCardBody>
                <MDBCardTitle>Expressions</MDBCardTitle>
                <MDBCardText>
                This collection highlights Andreas talent as an expressionist painter. The paintings reflect the deep inner emotions that interpret our journey as humans, the interplay between our experience and the mind that experiences those experiences.
                </MDBCardText>
                <MDBBtn className='collectionButton'href='#'>View Collection</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem>
        
          <MDBCarouselItem 
              className="w-100 d-block"
              itemID={3}
            >
            <MDBCard className='collectionCard'>
              <MDBCardImage src={Elements} position='top' alt='The element of Fire' />
              <MDBCardBody>
                <MDBCardTitle>Elements</MDBCardTitle>
                <MDBCardText>
                This collection highlights the raw power of the elements. The five elements are highlighted in the experience of the viewer through a mix of color and stroke style, creating a unique experience for each painting. As you look at these pieces observe how your mind reacts to them both emotionally and mentally. 
                </MDBCardText>
                <MDBBtn className='collectionButton'href='elements'>View Collection</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem> 

          <MDBCarouselItem 
              className="w-100 d-block"
              itemID={4}
            >
            <MDBCard className='collectionCard'>
              <MDBCardImage src={Sea} position='top' alt='at sea 1' />
              <MDBCardBody>
                <MDBCardTitle>Nature is Medicine</MDBCardTitle>
                <MDBCardText>
                This collection highlights impressionistic paintings inspired by the healing forces of Nature. These paintings capture the essence of a place, emotion, or mood. They are evocative and transport the viewer through a mix of color, texture, and light. They exist to inspire the viewer to connect with Nature and to find healing in the natural world.
                </MDBCardText>
                <MDBBtn className='collectionButton'href='#'>View Collection</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem>
         
    </div>
    </MDBCarousel>
       {/* </div>
     </div> */}
     </div>

  );

}
export default Collections;
