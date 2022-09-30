import React from 'react';
import { MDBInput, MDBCheckbox, MDBBtn, MDBTextArea, MDBValidationItem, MDBIcon, MDBRow, MDBCol, MDBContainer } from 'mdb-react-ui-kit';
import './contact.styles.scss';

const Contact = () => {
  return (

    <div className="contactContainer">
      <div className="contactForm">
      <form id='form' className='text-center' style={{ width: '100%', maxWidth: '300px' }}>
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
        </form>
      </div>
    </div>

  );

}
export default Contact;
