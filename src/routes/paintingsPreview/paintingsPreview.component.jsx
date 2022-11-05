import { useContext } from 'react';

import { CategoriesContext } from '../../Context/categories.context';
import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';  

 


const PaintingsPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
 
  return (
    <div>
      {
        Object.keys(categoriesMap).map((title) => {
          const paintings = categoriesMap[title];
          return (
          <CategoryPreview key={title} title={title} paintings={paintings} />
          );
        })
    }
    </div>

  );

}
export default PaintingsPreview;
