import React from 'react';
import Banner from '../shopBanner/Banner';
import './footer.css';
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-container">
                <Banner />
            </div>
            <div className="footer-wrapper">
                <div className="footerLeft">
                    <img src='../../../assets/images/logo-white.svg' alt="logo-white" />
                    <p>Shop có chính sách bảo hành trả hàng hoặc hoàn tiền 6 ngày kể từ ngày nhận sản phẩm nếu có lỗi từ phía Shop.</p>
                </div>
                <div className="footerRight">
                    <div className="nav-footer">
                        <span onClick={() => { window, scrollTo(0, 0) }}><NavLink to='/'>Trang chủ</NavLink></span>
                        <span onClick={() => { window, scrollTo(0, 0) }}><NavLink to='/products'>Sản phẩm</NavLink></span>
                        <span onClick={() => { window, scrollTo(0, 0) }}><NavLink to='/new-arrivals'>Hàng mới về</NavLink></span>
                        <span>Liên hệ</span>
                    </div>
                    <div className="contact">
                        <div className="infor">
                            <div className="infor-icon">
                                <img src='../../../assets/images/ic-phone.svg' alt="icon" />
                            </div>
                            <span>0387.640.174</span>
                        </div>
                        <div className="infor">
                            <div className="infor-icon">
                                <img src='../../../assets/images/ic-email.svg' alt="icon" />
                            </div>
                            <span>Gửi email</span>
                        </div>
                        <div className="infor">
                            <div className="infor-icon">
                                <img src='../../../assets/images/ic-mess.svg' alt="icon" />
                            </div>
                            <span><a href='https://m.me/thuantrinh.vn?hash=AbY2WtdDVdyosLoZ&source=qr_link_share' target='_blank'>Nhắn tin</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer