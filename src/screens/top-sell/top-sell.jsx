import React from 'react';
import PageBannerBreadcrumbs from '../../components/pageBannerBreadcrumbs/PageBannerBreadcrumbs';
import HomeSection from '../home/homeSection/HomeSection';
import ProductsSuggested from '../../components/productSuggested/productsSuggested';
import products from '../home/homeSection/productsArray';
import { NavLink } from 'react-router-dom';

const filterTopProduct = products.filter((card) => card.tag === 'TOP');

const TopSell = () => {
    return (
        <>
            <PageBannerBreadcrumbs>
                <NavLink activeClassName="active" to="/products"><span>Sản phẩm</span></NavLink>
                <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                <a><span>Top bán chạy</span></a>

            </PageBannerBreadcrumbs>
            <HomeSection
                sectionName='topProducts'
                sectionTitle='topSeller'
                bigTitle='TOP BÁN CHẠY'
                littleTitle='Các sản phẩm được nhiều khách hàng ủng hộ tại Luxury Shop'
                smallTitle='smallTitle'
                section={products}
                filterProduct={filterTopProduct}
            />
            <ProductsSuggested />
        </>
    )
}

export default TopSell