import React from 'react'
import PageBannerBreadcrumbs from '../../components/pageBannerBreadcrumbs/PageBannerBreadcrumbs';
import HomeSection from '../home/homeSection/HomeSection';
import ProductsSuggested from '../../components/productSuggested/productsSuggested';
import products from '../home/homeSection/productsArray';
import { NavLink } from 'react-router-dom';

const filterNewProduct = products.filter((card) => card.tag === 'NEW');

const NewArrivals = () => {
    return (
        <div>
            <PageBannerBreadcrumbs>
                <NavLink activeClassName="active" to="/products"><span>Sản phẩm</span></NavLink>
                <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                <a><span>Hàng mới về</span></a>

            </PageBannerBreadcrumbs>
            <HomeSection
                sectionName='newProducts'
                sectionTitle='newArrivals'
                bigTitle='HÀNG MỚI VỀ'
                littleTitle='Sản phẩm mới đã cập bến Luxury Shop! Nhanh tay lựa ngay deal hời các tình yêu ơi <3'
                smallTitle='smallTitle'
                section={products}
                filterProduct={filterNewProduct}
            />
            <ProductsSuggested />
        </div>
    )
}

export default NewArrivals