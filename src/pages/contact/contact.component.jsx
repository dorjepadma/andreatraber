import React from 'react';
import { MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import Mailer from '../../components/Email/email.jsx';
import Email from '../../assets/images/Contact/email.jpeg';

import './contact.styles.scss';

const Contact = () => {

  return (

    <div className="contactContainer">
      <div className="contactForm">
        <MDBContainer>
          <MDBRow>
            <MDBCol >
            <img
      src={Email}
      className='img-thumbnail'
      alt='a phone to contact Andrea Traber'
    />
              <h1 className="contactTitle">Contact Andrea through a quick email</h1>
      {/* <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }} >
          <h2>Reach Andrea here:</h2>

          <MDBValidationItem className='mb-3' required>
          <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required/>
          </MDBValidationItem>

          <MDBValidationItem className='mb-3' required> 
          <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required/>
          </MDBValidationItem>

          <MDBValidationItem className='mb-3' required>
          <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required/>
          </MDBValidationItem>

          <MDBValidationItem className='mb-3' required>
          <MDBTextArea wrapperClass='mb-4' label='Message' required/>
          </MDBValidationItem>

          <MDBValidationItem className='mb-3' required>
          <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' required/>
          </MDBValidationItem>

          <MDBBtn color='primary' block className='my-4'>
            Send
          </MDBBtn>
        </form> */}
        <Mailer />
            </MDBCol>
      </MDBRow>
    </MDBContainer>
      </div>
    </div>

  );

}
export default Contact;
