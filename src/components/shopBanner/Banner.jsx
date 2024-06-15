import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="footer-banner">
                <h1>MUA HÀNG QUA SÀN THƯƠNG MẠI ĐIỆN TỬ</h1>
                <div className="onlineShop">
                    <img src='../../../public/images/ic-shopee.svg' alt="ic-shopee" />
                    <img src='../../../public/images/ic-tiktok.svg' alt="ic-tiktok" />
                    <img src='../../../public/images/ic-lazada.svg' alt="ic-lazada" />
                </div>
            </div>
        </div>
    )
}

export default Banner