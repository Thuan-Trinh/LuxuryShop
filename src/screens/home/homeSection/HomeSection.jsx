import React from 'react';
import ProductCard from './ProductCard.jsx';
import { useNavigate } from 'react-router-dom';
import './HomeSection.css';
const HomeSection = (props) => {
  const navigate= useNavigate();
  const {
    page,
    sectionName,
    sectionTitle,
    bigTitle,
    littleTitle,
    filterProduct
  } = props;
  return (
    <div className={sectionName}>
      <div className={sectionTitle}>
        <span className='bigTitle'>{bigTitle}</span>
        <span className={props.smallTitle}>{littleTitle}</span>
      </div>

      <div className='product-list container'>
        {filterProduct.length >= 1 ? (
          <>
            {filterProduct.slice(0, 4).map((card) => (
              <ProductCard
              {...card}
              key={card.id}
                productImage={card.productImage[0]}
              />
            ))}
          </>
        ) : (
          <>
            <p>No card!</p>
          </>
        )}
      </div>

      <button className="secondary-btn"  onClick={() => navigate(page)}>
        <span>Xem thêm</span>
      </button>
    </div>
  );
};

export default HomeSection;
