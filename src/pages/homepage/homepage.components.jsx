
import Hung from '../../assets/images/hung.jpeg';

import './homepage.styles.scss';


const Homepage = () => {
  return (
    <div className="homepage">
      <div className='titleContainer'>
        <div className='title'>
          <h1>Andrea Traber Studios</h1>
        </div>
        <div className='subTitle'> Visions of the 5 elements
        </div>
      </div>
      <img className='homePageImage' src={Hung} alt='andreas painting'>

      </img>
    </div>
  );
}
export default Homepage;
