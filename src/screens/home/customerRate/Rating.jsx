import React, { useRef, useEffect , useState} from 'react';
import products from '../homeSection/productsArray';
import './rating.css'
const Rating = () => {
    const ratingListRef = useRef(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const scrollLeft = () => {
        if (ratingListRef.current) {
            ratingListRef.current.scrollBy({
                left: -364, // width of one customerRate card + gap
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (ratingListRef.current) {
            ratingListRef.current.scrollBy({
                left: 364, // width of one customerRate card + gap
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const ratingList = ratingListRef.current;

        const handleScroll = () => {
            const maxScrollLeft = ratingList.scrollWidth - ratingList.clientWidth;
            setShowLeftButton(ratingList.scrollLeft > 0);
            setShowRightButton(ratingList.scrollLeft < maxScrollLeft);
        };

        ratingList.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            ratingList.removeEventListener('scroll', handleScroll);
        };
    }, []);
  
    return (
        <div className='rateSection'>
            <div className='rateTitle '>
                <span className='bigTitle'>ĐÁNH GIÁ TỪ KHÁCH HÀNG</span>
                <span className='littleTitle'>Nhiều khách hàng đã mua, sử dụng và hài lòng về chất lượng sản phẩm tại Luxury Shop!</span>
            </div>
            <div className="listContainer">

                <div className="ratingList" ref={ratingListRef} >
                    {products.slice(0, 12).map((product, index) => (
                        <div className='customerRate' key={index}>
                            <div className="stars">
                                <img src={product.productRate.star1} alt="star" />
                                <img src={product.productRate.star1} alt="star" />
                                <img src={product.productRate.star1} alt="star" />
                                <img src={product.productRate.star1} alt="star" />
                                <img src={product.productRate.star2} alt="star" />
                            </div>
                            <span className='customName'>{product.productRate.customName}</span>
                            <p className='customRate'>{product.productRate.customRate}</p>
                            <p className='productName'>{product.productRate.nameOfProduct}; Màu: {product.productRate.productColor}; Size: {product.productRate.productSize}</p>
                        </div>
                    ))
                    }
                </div>
                {showRightButton && (
                    <button className="icon-right" onClick={scrollRight}>
                        <img src='../public/images/ic-next.svg' alt="icon" />
                    </button>
                )}
                {showLeftButton && (
                    <button className="icon-left" onClick={scrollLeft}>
                        <img src='../public/images/ic-previous.svg' alt="icon" />
                    </button>
                )}
            </div>
        </div>
    )
}

export default Rating