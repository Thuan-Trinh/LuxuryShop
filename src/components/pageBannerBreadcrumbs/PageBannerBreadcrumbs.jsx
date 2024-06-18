import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../shopBanner/Banner';

const PageBannerBreadcrumbs = ({title}) => {
    return (
        <>
            <div className="banner">
                <Banner />
            </div>
            <div className="wrapper">
                <div className="breadcrumms">
                    <span><NavLink activeClassName="active" to="/">Trang chủ</NavLink></span>
                    <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                    <span><NavLink activeClassName="active" to="/products">Sản phẩm</NavLink></span>
                    <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                    <span>{title}</span>
                </div>
            </div>
        </>
    )
}

export default PageBannerBreadcrumbs