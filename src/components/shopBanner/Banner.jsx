import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className="footer-banner">
                <h1>MUA HÀNG QUA SÀN THƯƠNG MẠI ĐIỆN TỬ</h1>
                <div className="onlineShop">
                    <a href="https://shopee.vn/windy_luxury" target='_blank'>
                        <img src='../../../assets/images/ic-shopee.svg' alt="ic-shopee" />
                    </a>
                    <a href="https://www.tiktok.com/@depxinh_luxuryshop?_t=8nEjhRCoZIG&_r=1" target='_blank'>
                        <img src='../../../assets/images/ic-tiktok.svg' alt="ic-tiktok" />
                    </a>
                    <a href="https://s.lazada.vn/s.VK4JE" target='_blank'>
                        <img src='../../../assets/images/ic-lazada.svg' alt="ic-lazada" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Banner