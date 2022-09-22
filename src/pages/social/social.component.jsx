// import Curator from './Curator.component';
import { MDBRipple } from 'mdb-react-ui-kit';
import './social.styles.scss';
import Instagram from '../../assets/images/Social/instagram.png';

const Social = () => {
  return (
    <div className="socialContainer">
      <h1> A curated space for social media. Tag Andrea and her works and have your post show up here on our Social Page. We look forward to seeing your creativity. </h1>
      <MDBRipple rippleTag='a'>
        <a href= 'https://www.instagram.com/andreatraber.studio/'>
      <img
        src={Instagram}
        className='img-fluid rounded'
        alt='Instagram'
        href= 'https://www.instagram.com/andreatraber.studio/'
      />
      </a>
    </MDBRipple>
      <div className='curatorContainer'>
      {/* <Curator feedId="d8aa9f35-b8eb-4e3c-9ee4-9a0dbb61cd92" /> */}
  </div>
    </div>
    
  );

}
export default Social;
