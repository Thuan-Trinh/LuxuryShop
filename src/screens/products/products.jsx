import React, { useState } from 'react';
import Banner from '../../components/shopBanner/Banner';
import products from '../home/homeSection/productsArray';
import ProductCard from '../home/homeSection/ProductCard';
import { NavLink } from 'react-router-dom';
import './products.css';

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
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
    };
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    return (
        <div className='allProductsPage'>
            <Banner />
            <div className="productContainer">
                <div className="breadcrumms">
                    <span><NavLink activeClassName="active" to="/">Trang chủ</NavLink></span>
                    <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                    <span><NavLink exact activeClassName="active" to="/products">Sản phẩm</NavLink></span>
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
                                    type="radio"
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
                                    type="radio"
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
                                    type="radio"
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
                                    type="radio"
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
                                <input type="number" placeholder='Giá thấp nhất' value='0' />
                                <div className='from-to'></div>
                                <input type="number" placeholder='Giá cao nhất' value='0' />
                            </div>
                        </div>
                        <div className="btn-confirm">
                            Áp dụng lọc
                        </div>
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
                            className='prev'
                            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}>
                                <img src="../../assets/images/ic-previous.svg" alt="prev" />
                                <span>Previous</span>
                            </button>
                            <div className="pagination">
                                {pageNumbers.map(number => (
                                    <button key={number} onClick={() => handlePageChange(number)}>
                                        {number}
                                    </button>
                                ))}
                            </div>
                            <button
                            className='next'
                            onClick={() => handlePageChange(currentPage < pageNumbers.length ? currentPage + 1 : currentPage)}
                            >
                                <img src="../../assets/images/ic-next.svg" alt="next" />
                                <span>Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Products;