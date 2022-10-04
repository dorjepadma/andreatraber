import React from 'react';

import { MDBBtn } from 'mdb-react-ui-kit';




const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent('Inquiring about Nestz')}`;
  // if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)} ${window.location.href}}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};

const Mailer = () => {
  
  return (

    <Mailto
      className='emailLink'
      variant="contained"
      size="large"
      color="primary"
      target="_top"
      rel="noopener noreferrer"
      email="andrea@andreatraber.com"
      subject='Inquiry about your art and website '
      body=' '
    >
      <MDBBtn variant="primary" className='emailLink' style={{ fontSize: '1rem' }}>
        Email Andrea Traber
      </MDBBtn>
    </Mailto>
  )
}

export default Mailer;
