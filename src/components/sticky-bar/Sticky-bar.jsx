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
        <img src='../../../assets/images/ic-shopee.svg' alt="ic-shopee" />
        <img src='../../../assets/images/ic-tiktok.svg' alt="ic-tiktok" />
        <img src='../../../assets/images/ic-lazada.svg' alt="ic-lazada" />
      </div>
    </section>
  );
}

export default StickBar;
