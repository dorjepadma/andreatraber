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
              <MDBCardImage src={Sunflowers} position='top' alt='Painting fo the Sky'  />
              <MDBCardBody>
                <MDBCardTitle>Fun</MDBCardTitle>
                <MDBCardText>
                This collection highlights a playful experience through art. Here Andrea is playing with light hearted themes that reflect the joy of the heart and simplicity of the human mind unencumbered by the worries of daily life. 
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
                This collection highlights visionary paintings from Andrea's personal spiritual practice. Andrea has studied esoteric Buddhism for decades and the unfolding of her understanding is reflected in these paintings, each express of the wisdom of the teachings she has received.
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
                This collection highlights the raw power of the elements. The five elements are highlighted in the experience of the viewer through a mix of color and stroke style, creating a unique experience for each painting. As you look at these pieces observe how your mind reacts to them both emotionally and mentally. 
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
                This collection highlights impressionistic paintings inspired by the San Francisco Bay Area and world travels. These paintings capture the essence of a place, emotion, or mood. They are evocative and transport the viewer through a mix of color, texture, and light.
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
