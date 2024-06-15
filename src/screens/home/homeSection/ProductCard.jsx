import React from 'react'
const ProductCard = (props) => {
    return (
        <div className="product-card">
            <div className="card-img">
                <img src={props.productImage} alt={props.id} className="preview-img" />
            </div>
            <div className="card-infor">
                <p className="product-title">
                    {props.productName}
                </p>
                <div className="rating">
                    <div className="rating-stars">
                        <img src={props.star} alt={props.star} />
                        <img src={props.star} alt={props.star} />
                        <img src={props.star} alt={props.star} />
                        <img src={props.star} alt={props.star} />
                        <img src={props.star2} alt={props.star2} />
                    </div>
                    {props.saleTag &&
                        <div className="tags-flash-sale show">
                            <img src={props.icFlash} alt={props.icFlash} />
                            <span>{props.saleTag}</span>
                        </div>
                    }
                </div>
                <div className="price">
                    <span className="real-price">{props.realPrice}</span>
                    <span className="fake-price">{props.fakePrice}</span>
                </div>
            </div>
            <div className="tags">
                {props.tag && <div className={props.tag}><span>{props.tag}</span></div>}
                {props.coupon && <div className="tag-coupon"><span>{props.coupon}</span></div>}
            </div>
        </div>
    )
}

export default ProductCard