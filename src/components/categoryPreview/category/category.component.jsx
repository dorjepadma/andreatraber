import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../../Context/categories.context';

import './category.styles.scss'

import PaintingCard from '../../paintingCard/paintingCard.component';

const Category = () => {
  
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [paintings, setPaintings] = useState(categoriesMap[category]);

  useEffect(() => {
    setPaintings(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='categoryContainer2'>
       <h2 className='categoryTitle' >
        {category}
      </h2>
      { paintings &&
        paintings.map((painting) => <PaintingCard key={painting.id} painting={painting}/>)
    }
    </div>
  );}

export default Category;
