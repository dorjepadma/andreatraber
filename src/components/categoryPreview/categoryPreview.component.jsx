import './categoryPreview.styles.scss';

import PaintingCard from '../../components/paintingCard/paintingCard.component';

const CategoryPreview = ({ title, paintings }) => (
  <div className='category-preview-container'>
    <h2 >
      <span className='title'>
      {title.toUpperCase()}
      </span>
    </h2>
    <div className='preview'>
      {paintings
        .filter((_, idx) => idx < 1)
        .map((painting) => (
        <PaintingCard key={painting.id} painting={painting} />))}
    </div>
  </div>
);

export default CategoryPreview;
