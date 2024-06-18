import React from 'react';
import ProductCard from './ProductCard.jsx';
import './HomeSection.css';
const HomeSection = (props) => {
  const {
    children,
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
            {filterProduct.map((card) => (
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
      {children}
    </div>
  );
};

export default HomeSection;
