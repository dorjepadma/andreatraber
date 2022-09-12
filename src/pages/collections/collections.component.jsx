import React from 'react';
import Sky from '../../assets/images/CollectionsImages/Sky.png';
import Sunflowers from '../../assets/images/CollectionsImages/Sunflowers-1.png';
import Hung from '../../assets/images/CollectionsImages/hung.jpeg';
import Fire from '../../assets/images/CollectionsImages/fire2.jpeg';
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
        <div class="col-lg-12">
            <MDBCarouselItem 
              className='w-100 d-block active'
              itemID={0}
            >
            <MDBCard className='collectionCard'>
              <MDBCardImage src={Sky} position='top' alt='Painting fo the Sky' />
              <MDBCardBody>
                <MDBCardTitle>Sky</MDBCardTitle>
                <MDBCardText>
                This collection highlights a spacious mind
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
              <MDBCardImage src={Sunflowers} position='top' alt='Painting fo the Sky'  />
              <MDBCardBody>
                <MDBCardTitle>Fun</MDBCardTitle>
                <MDBCardText>
                This collection highlights a playful experience through art
                </MDBCardText>
                <MDBBtn className='collectionButton'href='#'>View Collection</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem>
          <MDBCarouselItem 
              className="w-100 d-block"
              itemID={2}
            >
            <MDBCard className='collectionCard'>
              <MDBCardImage src={Hung} position='top' alt='Painting fo the Sky' />
              <MDBCardBody>
                <MDBCardTitle>Meditations</MDBCardTitle>
                <MDBCardText>
                This collection highlights visionary paintings from Andrea's personal spiritual practice.
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
              <MDBCardImage src={Fire} position='top' alt='The element of Fire' />
              <MDBCardBody>
                <MDBCardTitle>Elements</MDBCardTitle>
                <MDBCardText>
                This collection highlights the raw power of the elements
                </MDBCardText>
                <MDBBtn className='collectionButton'href='#'>View Collection</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCarouselItem> 
          <MDBCarouselItem 
              className="w-100 d-block"
              itemID={4}
            >
            <MDBCard className='collectionCard'>
              <MDBCardImage src={Sea} position='top' alt='Abstract Sail boats at sea' />
              <MDBCardBody>
                <MDBCardTitle>Impressions</MDBCardTitle>
                <MDBCardText>
                This collection highlights Impressionistic paintings inspired by the bay area and travels.
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
