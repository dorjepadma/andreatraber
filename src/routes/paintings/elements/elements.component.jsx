import { useContext } from 'react';
// import PAINTING_DATA from '../../../utils/paintingData.json';
import { CategoriesContext } from '../../../Context/categories.context';
import PaintingCard from '../../../components/paintingCard/paintingCard.component';

 
import './elements.styles.scss';

const Elements = () => {
  const { categoriesMap } = useContext(CategoriesContext);
 
  return (
    
    <div  className="elementsContainer">
      {
        Object.keys(categoriesMap).map(title => (
          <div className='elementsPageTitle' key={title} >
              <h1>{title}</h1>
          <div className="paintingContainer">
            {categoriesMap[title].map(( painting ) => (
            < PaintingCard key={painting.id} painting={painting}/>
            ))}
          </div>
          </div>
        ))
      }
    </div>

  );

}
export default Elements;


