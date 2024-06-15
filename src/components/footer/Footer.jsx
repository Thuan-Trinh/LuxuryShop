import React from 'react';
import Banner from '../shopBanner/Banner';
import './footer.css';

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
                        <span>Trang chủ</span>
                        <span>Sản phẩm</span>
                        <span>Hàng mới về</span>
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
                            <span>Email us</span>
                        </div>
                        <div className="infor">
                            <div className="infor-icon">
                                <img src='../../../assets/images/ic-mess.svg' alt="icon" />
                            </div>
                            <span>Message us</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer