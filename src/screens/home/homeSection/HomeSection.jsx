import React from 'react';
import ProductCard from './ProductCard.jsx';
import './HomeSection.css';
const HomeSection = (props) => {
  const {
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

      <button className="secondary-btn">
        <span>Xem thêm</span>
      </button>
    </div>
  );
};

export default HomeSection;
