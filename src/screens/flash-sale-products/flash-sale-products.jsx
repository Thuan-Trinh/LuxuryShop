import React from 'react';
import useCountdown from '../home/homeSection/count_down';
import HomeSection from '../home/homeSection/HomeSection';
import products from '../home/homeSection/productsArray';
import ProductsSuggested from '../../components/productSuggested/productsSuggested';
import PageBannerBreadcrumbs from '../../components/pageBannerBreadcrumbs/PageBannerBreadcrumbs';
import { NavLink } from 'react-router-dom';
import './flash-sale.css'

const filterSaleProduct = products.filter((card) => card.saleTag === "SALE");

const FlashSaleProducts = () => {
    const countdown = useCountdown((1 * 60 * 60) + (30 * 60));
    return (
        <div>
            <PageBannerBreadcrumbs>
                <NavLink activeClassName="active" to="/products"><span>Sản phẩm</span></NavLink>
                <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                <a><span>Flash Sale</span></a>
            </PageBannerBreadcrumbs>
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