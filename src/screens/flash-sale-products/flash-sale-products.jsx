import React from 'react';
import Banner from '../../components/shopBanner/Banner';
import useCountdown from '../home/homeSection/count_down';
import HomeSection from '../home/homeSection/HomeSection';
import products from '../home/homeSection/productsArray';
import ProductsSuggested from '../../components/productSuggested/productsSuggested';
import { NavLink } from 'react-router-dom';

import './flash-sale.css'

const filterSaleProduct = products.filter((card) => card.saleTag === "SALE");

const FlashSaleProducts = () => {
    const countdown = useCountdown((1 * 60 * 60) + (30 * 60));
    return (
        <div>
            <div className="banner">
                <Banner />
            </div>
            <div className="wrapper">
                <div className="breadcrumms">
                    <span><NavLink activeClassName="active" to="/">Trang chủ</NavLink></span>
                    <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                    <span><NavLink activeClassName="active" to="/products">Sản phẩm</NavLink></span>
                    <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                    <span>Flash Sale</span>
                </div>
            </div>
            <HomeSection
                sectionName='flash-sale'
                sectionTitle='flash-sale-title'
                bigTitle='FLASH SALE'
                littleTitle={countdown}
                smallTitle='countdown'
                filterProduct={filterSaleProduct}
            />
            <ProductsSuggested />
        </div>
    )
}

export default FlashSaleProducts