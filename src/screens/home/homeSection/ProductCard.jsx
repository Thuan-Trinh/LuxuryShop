import React from 'react'
const ProductCard = ({ tag, coupon, handleShowProductDetail, productImage, id, productName, star, star2, saleTag, icFlash, realPrice, fakePrice, }) => {
    return (
        <div className="product-card">
            <div className="card-img" onClick={() => handleShowProductDetail()}>
                <img src={productImage} alt={id} className="preview-img" />
            </div>
            <div className="card-infor">
                <p className="product-title">
                    {productName}
                </p>
                <div className="rating">
                    <div className="rating-stars">
                        <img src={star} alt={star} />
                        <img src={star} alt={star} />
                        <img src={star} alt={star} />
                        <img src={star2} alt={star2} />
                        <img src={star} alt={star} />
                    </div>
                    {saleTag &&
                        <div className="tags-flash-sale show">
                            <img src={icFlash} alt={icFlash} />
                            <span>{saleTag}</span>
                        </div>
                    }
                </div>
                <div className="price">
                    <span className="real-price">{realPrice}</span>
                    <span className="fake-price">{fakePrice}</span>
                </div>
            </div>
            <div className="tags">
                {tag && <div className={tag}><span>{tag}</span></div>}
                {coupon && <div className="tag-coupon"><span>{coupon}</span></div>}
            </div>
        </div>
    )
}

export default ProductCard