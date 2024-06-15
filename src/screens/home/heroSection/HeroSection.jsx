import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero-section">
            <div className="hero-section container">
                <div className="hero-left-side">
                    <div className="hero-title">
                        <h1>CHỌN SẢN PHẨM PHÙ HỢP VỚI YÊU
                            CẦU CỦA BẠN</h1>
                        <p>Dép Xinh Luxury Shop luôn mong muốn mang đến cho bạn những sản phẩm chất lượng với giá thành phải
                            chăng nhất!</p>
                    </div>
                    <button id="cta-btn" className="cta-btn"><span>Mua ngay</span></button>
                </div>

                <div className="hero-right-side">
                    <img src='../../../public/images/hero_img.webp' alt="hero-img" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection