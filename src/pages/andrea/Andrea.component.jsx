
import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit';
import AndreaImage from '../../assets/images/AndreaTraber.png';

import './andrea.styles.scss';


const Andrea = () => {
  return (
    <div className="andreaContainer" >
        <div className='andreaHero'>
        <div className='andreaTitle'>
          <h1>Andrea Traber</h1>
        </div>
        <div className='subTitle'> Unfolding Wisdom through paint, brush, and dance.
        </div>
        </div>
<MDBContainer >
  <MDBRow between>
    <MDBCol size='md'>
    <img className='homePageImage' src={AndreaImage} alt='Andrea'/>
    </MDBCol>
    <MDBCol size='md'>
    <div className='aboutAndrea'>
      <MDBTypography tag='h2' className='mb-0'>
      Painting is my life’s inspiration.  
      </MDBTypography>
      <MDBTypography className='text-center mb-0' tag='em'>
      <div>
      Through the act of being with an empty canvas
      </div>
      <div>
      …the fullness of infinite possibility…
      </div>
      <div>
      …not “knowing” where to go or what to paint…
      </div>
      <div>
      my inspiration finds itself in this most liberating experience
      </div>
      </MDBTypography>
        <MDBTypography tag='h5' className='mb-0'>
          As the energy,  movement, color and stroke enter my psyche and leave through my mind, heart, arms, hands, fingers and brush, my soul finds itself in this opening.  I touch a place deep inside, far beyond any judgment or reason, safe from the harsh critique of self and other.  
        </MDBTypography>

        <MDBTypography tag='h5' className='mb-0'>
          I experience joy, love, anger, fear, hesitation, pain and glory—the full complement—and all are welcome.  In this refuge, the playful, colorful, space, rich patterns and texture become their own, regardless of concept, perhaps pleasing to eye, heart and soul.  
        </MDBTypography>

        <MDBTypography tag='h5' className='mb-0'>
          I merely help the paint and canvas take form, conjuring its own inner beauty and peace.  In this emptiness of meaning, there is great freedom.  That others may experience delight in my inspiration is truly an unexpected blessing. 
        </MDBTypography>

        <MDBTypography tag='h5' className='mb-0'>
          Having drawn all my life, I began painting in 1997 at the San Francisco Art Institute.  My early work was with Glenn Hirsch and Pam Lanza, using watercolor, pastels, charcoal, acrylics, and mixed media, with landscape drawing and painting capturing my attention.  In 2000, I sought out abstract painting with Brenda Vanoni, and I became obsessed and inspired.  I continued studying with Brenda at SFAI, then with Brent Hallard http://brenthallard.us/ at SFAI, and most recently with Mel Prest http://www.melprest.com/ at CCA and SFAI.  Painting is the counterbalance to my days as an architect and sustainability consultant, informing my analytical work with inspiration and creativity and joy. 
        </MDBTypography>

      </div>
    </MDBCol>
  </MDBRow>
      
</MDBContainer>
  
    </div>
  );
}
export default Andrea;
