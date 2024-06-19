import React from 'react';
import { NavLink } from 'react-router-dom';
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
                            <li onClick={() => { window, scrollTo(0, 0) }}><NavLink exact activeClassName="active" to="/">Trang chủ</NavLink></li>
                            <li onClick={() => { window, scrollTo(0, 0) }}><NavLink activeClassName="active" to="/products">Sản phẩm</NavLink></li>
                            <li onClick={() => { window, scrollTo(0, 0) }}><NavLink activeClassName="active" to="/contacts">Liên hệ</NavLink></li>
                            <li>
                                <NavLink activeClassName="active" to="/cart">Giỏ hàng</NavLink>
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
        </header >

    )
}
;
export default Header;