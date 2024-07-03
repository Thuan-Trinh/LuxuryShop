import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../home/homeSection/productsArray';
import PageBannerBreadcrumbs from '../../components/pageBannerBreadcrumbs/PageBannerBreadcrumbs';
import ProductsSuggested from '../../components/productSuggested/productsSuggested';


const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find((product) => product.id === id);
    const {
        productImage,
        realPrice,
        fakePrice,
        saleTag,
        icFlash,
        star,
        star2,
        sortScript,
        productStock,
        productName
    } = product;

    const [selectedImage, setSelectedImage] = useState(productImage[0]);
    const [selectedColor, setSelectedColor] = useState(productStock[0].color);

    useEffect(() => {
        setSelectedImage(productImage[0]);
    }, [product]);

    const handleImageClick = (img) => {
        setSelectedImage(img);
    };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const selectedProductStock = productStock.find(stock => stock.color === selectedColor);

    return (
        <div>
            <PageBannerBreadcrumbs>
                <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                <a><span>{productName}</span></a>
            </PageBannerBreadcrumbs>
            <div className="product-brief">
                <div className="display-product">
                    <div className="display-img">
                        <img src={selectedImage} alt="display-img" />
                    </div>
                    <div className="preview-product-img">
                        {productImage.map((img, idx) => (
                            <div className="product-img" key={idx} onClick={() => handleImageClick(img)}>
                                <img src={img} alt={`product-img-${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="brief-product">
                    <div className="product-price">
                        <span>{realPrice}</span>
                        <span>{fakePrice}</span>
                        {saleTag && (
                            <div className="tags-flash-sale show">
                                <img src={icFlash} alt="flash sale icon" />
                                <span>{saleTag}</span>
                            </div>
                        )}
                    </div>
                    <div className="rating-stars">
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star2} alt="half star" />
                    </div>
                    <p>{sortScript}</p>
                    <span>Chọn màu</span>
                    <div className="color-pick">
                        {productStock.map((stock) => (
                            <button
                                key={stock.color}
                                onClick={() => handleColorChange(stock.color)}
                                className={stock.color === selectedColor ? 'selectedColor' : ''}
                            >
                                {stock.color}
                            </button>
                        ))}
                    </div>
                    <span>Chọn size</span>
                    <div className="size-pick">
                        {selectedProductStock.store.map((store, index) => (
                            <button
                                key={`${selectedColor}-${store.size}-${index}`}
                                className={store.stock > 0 ? 'available' : 'disabled'}
                            >
                                {store.size}
                            </button>
                        ))}
                    </div>
                    <div className="cta-btns">
                        <div className="count-product">
                            {/* Add your product count logic here */}
                        </div>
                        <button>Thêm vào giỏ hàng</button>
                        <button>Mua ngay</button>
                    </div>
                    <span>Hoặc chọn phương thức mua khác</span>
                    <div className="buying-method">
                        <button className="buy-online">Mua qua sàn online</button>
                        <button className="direct-contact">Liên hệ trực tiếp</button>
                    </div>
                </div>
            </div>
            <ProductsSuggested />
        </div>
    );
};

export default ProductDetails;
