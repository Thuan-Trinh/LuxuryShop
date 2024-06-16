import React from 'react';
import './Sticky-bar.css';

function StickBar() {
  return (
    <section id="sticky-bar" className="sticky-bar">
      <p>
        Sale to chào hè - Giảm giá tới 50%.{' '}
        <strong style={{ color: '#F59E0B' }}>Đặt hàng ngay!</strong>
      </p>
      <div className="sticky-bar-imgs">
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
    </section>
  );
}

export default StickBar;
