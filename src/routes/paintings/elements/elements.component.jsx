import { useContext } from 'react';
// import PAINTING_DATA from '../../../utils/paintingData.json';
import { PaintingsContext } from '../../../Context/paintings.context';
import PaintingCard from '../../../components/paintingCard/paintingCard.component';
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCard,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardBody
} from 'mdb-react-ui-kit';
 
import './elements.styles.scss';

const Elements = () => {
  const { paintings } = useContext(PaintingsContext);
 
  return (
    <div  className="elementsContainer">
      <div className='elementsPageTitle'>
        <h1> The Elements Collection </h1>
      </div>
     <div className="paintingContainer">
      {paintings.map(( painting ) => (
      < PaintingCard key={painting.id} painting={painting}/>
      ))}
     </div>
     
    </div>

  );

}
export default Elements;


