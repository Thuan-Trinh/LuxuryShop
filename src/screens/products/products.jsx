import React, { useState } from 'react';
import Banner from '../../components/shopBanner/Banner';
import products from '../home/homeSection/productsArray';
import ProductCard from '../home/homeSection/ProductCard';
import { NavLink } from 'react-router-dom';
import './products.css';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState('Tất cả');
    const [filteredProducts, setFilteredProducts] = useState(products);

    const filterCatagory = ['Tất cả', 'Dép lê', 'Xăng đan', 'Kẹp ngón', 'Cao gót', 'Giá thấp đến cao', 'Giá cao đến thấp'];

    const productsPerPage = 12;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
        pageNumbers.push(i);
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    const handleFilterClick = (filter) => {
        setSelectedFilter(filter);
        let newFilteredProducts = products;

        if (filter !== 'Tất cả') {
            newFilteredProducts = products.filter(product => product.catagory === filter);
        }

        if (filter === 'Giá thấp đến cao') {
          newFilteredProducts = [...products].sort((a, b) => convertPrice(a.realPrice) - convertPrice(b.realPrice));
        }

        if (filter === 'Giá cao đến thấp') {
           newFilteredProducts = [...products].sort((a, b) => convertPrice(b.realPrice) - convertPrice(a.realPrice));
        }
        console.log('Filtered products:', newFilteredProducts);
        setFilteredProducts(newFilteredProducts);
        setCurrentPage(1);
    };

    const convertPrice = (priceString) => {
        return parseInt(priceString.replace(/[^0-9]/g, ''), 10);
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
                        {filterCatagory.map((filter) => (
                            <button
                                key={filter}
                                className={filter === selectedFilter ? 'selected' : ''}
                                onClick={() => handleFilterClick(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="allProductsListContainer">
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