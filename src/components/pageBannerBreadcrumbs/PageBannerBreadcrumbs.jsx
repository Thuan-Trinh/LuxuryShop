import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../shopBanner/Banner';
import './pageBannerBreacrums.css';

const PageBannerBreadcrumbs = ({children}) => {
    return (
        <>
            <div className="banner">
                <Banner />
            </div>
            <div className="wrapper">
                <div className="breadcrumms">
                    <NavLink activeClassName="active" to="/"><span>Trang chủ</span></NavLink>
                    <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                    <NavLink activeClassName="active" to="/products"><span>Sản phẩm</span></NavLink>
                    {children}
                </div>
            </div>
        </>
    )
}

export default PageBannerBreadcrumbs