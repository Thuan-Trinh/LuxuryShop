import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import "./Header.css";

function Header() {
    const { cart } = useContext(CartContext);
    console.log(cart);
    
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
                            <li onClick={() => { window.scrollTo(0, 0) }}>
                                <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Trang chủ</NavLink>
                            </li>
                            <li onClick={() => { window.scrollTo(0, 0) }}>
                                <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Sản phẩm</NavLink>
                            </li>
                            <li onClick={() => { window.scrollTo(0, 0) }}>
                                <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'active' : '')}>Liên hệ</NavLink>
                            </li>
                            <li>
                                <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active' : '')}>Giỏ hàng ({cart.length})</NavLink>
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
    );
}

export default Header;
