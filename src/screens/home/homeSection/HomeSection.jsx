import React from 'react';
import ProductCard from './ProductCard.jsx';
import SectionTitle from './SectionTitle.jsx';
import './HomeSection.css';
const HomeSection = (props) => {
  const {
    children,
    sectionName,
    sectionTitle,
    bigTitle,
    littleTitle,
    smallTitle,
    filterProduct
  } = props;
  return (
    <div className={sectionName}>
      <SectionTitle
      sectionTitle={sectionTitle}
      bigTitle={bigTitle}
      littleTitle={littleTitle}
      smallTitle={smallTitle}
      />

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
