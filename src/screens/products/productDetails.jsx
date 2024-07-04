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
        productName,
        madeFrom,
        style
    } = product;

    const [selectedImage, setSelectedImage] = useState(productImage[0]);
    const [selectedColor, setSelectedColor] = useState(productStock[0].color);
    const [showBtn, setShowBtn] = useState(true);

    useEffect(() => {
        setSelectedImage(productImage[0]);
        setSelectedColor(productStock[0].color);
    }, [product]);

    // const handleImageClick = (img) => {
    //     setSelectedImage(img);
    // };

    const handleColorChange = (color) => {
        setSelectedColor(color);
    };

    const handlePreviousImage = () => {
        const currentIndex = productImage.indexOf(selectedImage);
        const previousIndex = (currentIndex - 1 + productImage.length) % productImage.length;
        setSelectedImage(productImage[previousIndex]);
    };

    const handleNextImage = () => {
        const currentIndex = productImage.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % productImage.length;
        setSelectedImage(productImage[nextIndex]);
    };
    const handleSizeBoard = () => {
        setSelectedImage('../assets/images/size.webp');
        setShowBtn(false)
    }
    const handleShowImage = () => {
        setSelectedImage(productImage[0]);
        setShowBtn(true)
    }
    const selectedProductStock = productStock.find(stock => stock.color === selectedColor);

    return (
        <div>
            <PageBannerBreadcrumbs>
                <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                <a><span>{productName}</span></a>
            </PageBannerBreadcrumbs>
            <div className="container">
                <div className="product-brief">
                    <div className="display-product">
                        <div className="display-img">
                            {showBtn &&
                                <button className='previousImg' onClick={handlePreviousImage}>{"<"}</button>
                            }
                            <img src={selectedImage} alt="display-img" />
                            {showBtn &&
                                <button className='nextImg' onClick={handleNextImage}>{">"}</button>
                            }
                        </div>
                        <div className="preview-product-img">
                            <img
                                src={productImage[0]}
                                alt='product-img'
                                className='product-img'
                                onClick={handleShowImage}

                            />
                            <img
                                src='../assets/images/size.webp'
                                alt='product-img'
                                className='product-img'
                                onClick={handleSizeBoard}
                            />
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
                <div className="product-details">
                    <p className='text1'>{productName}</p>
                    —————
                    <p className='text1'>
                        🎉CHÀO MỪNG BẠN ĐẾN Với Luxury Shop Dép Xinh🎉 <br />
                        💕Shop Chuyên cung cấp các sản phẩm giày dép thời trang cao cấp, giá cả cạnh tranh cho bạn💕
                    </p>
                    ————— 🍃🌺🍃——————
                    <p className='text1'>
                        🌈🌈 THÔNG TIN SẢN PHẨM
                    </p>
                    <p className='text2'>
                        ❎Kích cỡ :  {selectedProductStock.store.map(store => store.size)[0]} - {selectedProductStock.store.map(store => store.size)[selectedProductStock.store.length - 1]} <br />
                        ❎Chất liệu : {madeFrom} <br />
                        ❎Màu sắc : {productStock.map(stock => stock.color).join(', ')} <br />
                        ❎Kiểu dáng : {style} <br />
                        Sản phẩm được làm từ da tổng hợp, quai mềm, giúp các nàng đi thoải mái, tiện lợi. Kiểu dáng trẻ trung, năng động, phù hợp với đi dạo, đi chơi, ở nhà hay đi biển vvv... Đế dép được may chắc chắn, bền, sử dụng lâu dài. Kiểu dáng cơ bản, quai ôm chân, đi lại dễ chịu
                    </p>
                    <br />
                    <p className='text1'>
                        📌 CÁCH BẢO QUẢN
                    </p>
                    <p className='text2'>
                        🔸 Tránh mang giày dép khi trời mưa hoặc thời tiết xấu để chúng không bị ướt dẫn đến bong tróc. <br />
                        🔸 Nên cất giữ sản phẩm ở nơi thoáng mát để giữ gìn chất lượng của sản phẩm ở mức tốt nhất. <br />
                        🔸 Lau chùi sản phẩm thường xuyên để tránh bụi bẩn. <br />
                        🔸 Chú ý là nên dùng bàn chải mềm hoặc khăn mềm để chà giặt sẽ tốt hơn cho đôi giày của bạn. <br />
                        🔸 Nên phơi đôi giày trong mát, không nên phơi trực tiếp dưới ánh nắng mặt trời. <br />
                        🔸 Sau khi giặt xong để ráo nước sử dụng giấy mềm, thấm nước, cuốn 2-3 vòng phủ toàn đôi giày. <br />
                        🔸 Khi da bị ẩm ướt cần lau khô, để nơi khô thoáng, tránh những tác động của nguồn nhiệt hoặc ánh sáng mặt trời. <br />
                    </p>

                    <br />
                    <p className='text1'>
                        🌈 Luxury Shop Dép Xinh CAM KẾT
                    </p>
                    <p className='text2'>
                        1. Bán hàng giá tốt đi kèm chất lượng. <br />
                        2. Sản phẩm được kiểm tra kĩ càng, cẩn thận và tư vấn nhiệt tình trước khi gói hàng giao cho Quý Khách. <br />
                        3. Tư vấn chuyên nghiệp, nhiệt tình 24/7. <br />
                        4. Dịch vụ giao hàng nhanh toàn quốc. <br />
                        5. Hỗ trợ đổi trả theo chính sách bảo hành 6 ngày kể từ khi nhận hàng. <br />
                        6. Dép được sản xuất tại Việt Nam - Shop cam kết về chất lượng, hình ảnh thật 100%.
                    </p>
                    ---------------------------
                    <p className="text2">
                        💝Shop xin cảm ơn bạn đã tin tưởng và chọn sản phẩm của Shop. <br />
                        💝Mỗi đơn hàng đến bạn là tâm huyết của shop. <br />
                        💝Hy vọng bạn hài lòng với sản phẩm của Shop và đừng quên giới thiệu bạn bè của bạn nhé! <br />
                        💝Nếu ưng ý về sản phẩm, rất mong Quý Khách đánh giá 5 Sao để Shop có thêm động lực để nâng cao chất lượng phục vụ Khách hàng.  <br />
                        🛒Chúc các bạn có những trải nghiệm vui vẻ khi mua hàng tại Luxury Shop💕
                    </p>
                </div>
            </div>
            <ProductsSuggested />
        </div>
    );
};

export default ProductDetails;
