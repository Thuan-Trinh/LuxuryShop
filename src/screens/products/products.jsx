import React, { useState } from 'react';
import Banner from '../../components/shopBanner/Banner';
import products from '../home/homeSection/productsArray';
import ProductCard from '../home/homeSection/ProductCard';
import { NavLink } from 'react-router-dom';
import './products.css';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [styleBtn, setStyleBtn] = useState(
        {
            background: "var(--color-neutral-200)",
            color: 'var(--color-neutral-900)'
        })
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };
    const handleCategoryChange = (event) => {
        const value = event.target.value;
        setSelectedCategory(selectedCategory === value ? '' : value);
        setStyleBtn({
            background: "var(--color-neutral-900)",
            color: 'var(--color-neutral-50)'
        })
    };
    return (
        <div className='allProductsPage'>
            <Banner />
            <div className="productContainer">
                <div className="breadcrumms">
                    <span><NavLink activeClassName="active" to="/">Trang chủ</NavLink></span>
                    <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                    <span>Sản phẩm</span>
                </div>
                <div className="displayProducts">
                    <div className="filterBar">
                        <div className="filterHeader">
                            <span>Lọc sản phẩm</span>
                            <img src="../../assets/images/ic-filter.svg" alt="ic-filter" />
                        </div>
                        <div className="category-filter">
                            <div className="category">
                                <input
                                    type="checkbox"
                                    id="dep-le"
                                    name="dep"
                                    value="Dép lê"
                                    checked={selectedCategory === 'Dép lê'}
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="dep-le">Dép lê</label>
                            </div>
                            <div className="category">
                                <input
                                    type="checkbox"
                                    id="dep-xang-dan"
                                    name="dep"
                                    value="Dép xăng đan"
                                    checked={selectedCategory === 'Dép xăng đan'}
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="dep-xang-dan">Dép xăng đan</label>
                            </div>
                            <div className="category">
                                <input
                                    type="checkbox"
                                    id="dep-kep-ngon"
                                    name="dep"
                                    value="Dép kẹp ngón"
                                    checked={selectedCategory === 'Dép kẹp ngón'}
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="dep-kep-ngon">Dép kẹp ngón</label>
                            </div>
                            <div className="category">
                                <input
                                    type="checkbox"
                                    id="dep-cao-got"
                                    name="dep"
                                    value="Dép cao gót"
                                    checked={selectedCategory === 'Dép cao gót'}
                                    onChange={handleCategoryChange}
                                />
                                <label htmlFor="dep-cao-got">Dép cao gót</label>
                            </div>
                        </div>
                        <div className="price-filter">
                            <span>Giá:</span>
                            <div className="input-price">
                                <input type="number" placeholder='min' />
                                <div className='from-to'></div>
                                <input type="number" placeholder='max' />
                            </div>
                        </div>
                        <button className="btn-confirm" style={styleBtn} >
                            Áp dụng lọc
                        </button>
                    </div>
                    <div className="allProductsListContainer">
                        <div className="productListTitle">
                            <span>Tất cả sản phẩm</span>
                        </div>
                        <div className="allProductList">
                            {currentProducts.map((card) => (
                                <ProductCard
                                    {...card}
                                    key={card.id}
                                    productImage={card.productImage[0]}
                                />
                            ))}
                        </div>
                        <div className="pageNav">
                            <button
                                className={currentPage == 1 ? 'hidden' : 'navPageBtn activeNavPage'}
                                onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}>
                                <img src="../../assets/images/ic-previous.svg" alt="prev" />
                                <span>Previous</span>
                            </button>
                            <div className="pagination">
                                {pageNumbers.map(number => (
                                    <button
                                        key={number}
                                        onClick={() => handlePageChange(number)}
                                        className={number === currentPage ? 'activePage' : ''}
                                    >
                                        {number}
                                    </button>
                                ))}
                            </div>
                            <button
                                className={currentPage == pageNumbers.length ? 'hidden' : 'navPageBtn activeNavPage'}
                                onClick={() => handlePageChange(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
                            >
                                <span>Next</span>
                                <img src="../../assets/images/ic-next.svg" alt="next" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Products;