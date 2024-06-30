import React, { useState } from 'react';
import Banner from '../../components/shopBanner/Banner';
import products from '../home/homeSection/productsArray';
import ProductCard from '../home/homeSection/ProductCard';
import { NavLink } from 'react-router-dom';
import Contacts from '../contacts/Contacts';
import './products.css';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedFilter, setSelectedFilter] = useState('Tất cả');
    const [selectedFilterPrice, setSelectedFilterPrice] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [selectedCard, setSeledtedCard] = useState(null);

    const [showProducts, setShowProducts] = useState(true);
    const [showProductDetail, setShowProductDetail] = useState(false);

    const filterCatagory = ['Tất cả', 'Dép lê', 'Xăng đan', 'Kẹp ngón', 'Cao gót'];
    const filterPrice = ['Giá thấp đến cao', 'Giá cao đến thấp'];

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

    const handleFilterCatagoryClick = (filter) => {
        setSelectedFilter(filter);
        let newFilteredProducts = products;

        if (filter !== 'Tất cả') {
            newFilteredProducts = products.filter(product => product.catagory === filter);
        }

        setFilteredProducts(newFilteredProducts);
        setSelectedFilterPrice('');
        setCurrentPage(1);
    };

    const handleFilterPriceClick = (filter) => {
        setSelectedFilterPrice(filter);
        let newFilteredProducts = currentProducts;

        if (filter === 'Giá thấp đến cao') {
            newFilteredProducts = [...currentProducts].sort((a, b) => convertPrice(a.realPrice) - convertPrice(b.realPrice));
        }

        if (filter === 'Giá cao đến thấp') {
            newFilteredProducts = [...currentProducts].sort((a, b) => convertPrice(b.realPrice) - convertPrice(a.realPrice));
        }
        setFilteredProducts(newFilteredProducts);
        setCurrentPage(1);
    }

    const handleShowProductDetail = (cardInfo) => {
        setShowProductDetail(true);
        setShowProducts(false);
        setSeledtedCard(cardInfo);
        console.log('b da click');
    }

    const handleBackToProducts = () => {
        setShowProductDetail(false);
        setShowProducts(true);
    }

    const convertPrice = (priceString) => {
        return parseInt(priceString.replace(/[^0-9]/g, ''), 10);
    };

    return (
        <div className='allProductsPage'>
            <Banner />
            <div className="productContainer">
                <div className="breadcrumms">
                    <NavLink activeClassName="active" to="/"><span>Trang chủ</span></NavLink>
                    <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                    <NavLink onClick={() => handleBackToProducts()}><span>Sản phẩm</span></NavLink>
                    {showProductDetail && selectedCard &&
                        <>
                            <img src="../../assets/images/ic_arrow_right.svg" alt="" />
                            <a><span>{selectedCard.productName}</span></a>
                        </>
                    }
                </div>
                {showProducts &&
                    <div className="displayProducts">
                        <div className="filterBar">
                            {filterCatagory.map((filter) => (
                                <button
                                    key={filter}
                                    className={filter === selectedFilter ? 'selected' : ''}
                                    onClick={() => handleFilterCatagoryClick(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                            {filterPrice.map((filter) => (
                                <button
                                    key={filter}
                                    className={filter === selectedFilterPrice ? 'selected' : ''}
                                    onClick={() => handleFilterPriceClick(filter)}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <div className="allProductsListContainer">
                            <div className="allProductList">
                                {currentProducts.map((card) => (
                                    <ProductCard
                                        key={card.id}
                                        {...card}
                                        productImage={card.productImage[0]}
                                        handleShowProductDetail={() => handleShowProductDetail(card)}
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
                }
                {showProductDetail && selectedCard &&
                    <p>đây là trang chi tiết sản phẩm</p>
                }
            </div>
        </div >
    )
}

export default Products;