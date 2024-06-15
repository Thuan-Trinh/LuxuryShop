import React from 'react';
import "./Header.css";
function Header() {
    return (
        <header>
            <div className="header-container">
                <div className="header">
                    <div className="shop-logo-header">
                        <img src='../../../assets/images/ic-logo-black.svg' alt="ic-logo-black" />
                        <img src='../../../assets/images/logo-text-black.svg' alt="logo-text-black" />
                    </div>
                    <nav className="nav-header">
                        <ul>
                            <li><a href="#" className="active">Trang chủ</a></li>
                            <li><a href="#">Sản phẩm</a></li>
                            <li><a href="#">Liên hệ & FAQ</a></li>
                            <li><a href="#">Giỏ hàng</a>
                                <span>(</span>
                                <span className="cart-count">0</span>
                                <span>)</span>
                            </li>
                        </ul>
                    </nav>
                    <div className="search-field">
                        <img src='../../../assets/images/ic-search.svg' alt="ic-search" />
                        <input type="search" placeholder="Tìm kiếm" className="search-input" />
                    </div>
                </div>
            </div>
        </header>
    )
}
;
export default Header;