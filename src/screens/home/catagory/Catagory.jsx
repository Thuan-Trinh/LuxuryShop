import React from 'react';
import './catagory.css';

const Catagory = () => {
    return (
        <div className='catagory'>
            <div className="container">
                <div className='cataTitle'>
                    <span className='bigTitle'>DANH MỤC</span>
                    <span className='littleTitle'>Duyệt qua các danh mục sản phẩm để xem sản phẩm yêu thích nha</span>
                </div>
                <div className="grid-cata">
                    <div className="top">
                        <div className="item1 cata-small">
                            <span className='cata-title'>Sandals</span>
                            <img src="../product-images/sandal.webp" alt="preview" />
                        </div>
                        <div className="item2 cata-big">
                            <span className='cata-title'>Cao Gót</span>
                            <img src="../product-images/caogot.webp" alt="preview" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="item3 cata-big">
                            <span className='cata-title'>Dép Kẹp Ngón</span>
                            <img src="../product-images/kepngon.webp" alt="preview" />
                        </div>
                        <div className="item4 cata-small">
                            <span className='cata-title'>Dép Lê</span>
                            <img src="../product-images/deple.webp" alt="preview" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catagory;