import { Routes, Route} from 'react-router-dom';

import PaintingsPreview from '../../paintingsPreview/paintingsPreview.component';
import Paintings from '../../paintingsPreview/paintingsPreview.component';
import Category from '../../../components/category/category.component';

 
import './painting.styles.scss';

const PaintingCollection = () => {

 
  return (
    <Routes>
      <Route index element={<PaintingsPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>

  );

}
export default PaintingCollection;
