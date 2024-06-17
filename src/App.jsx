import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StickBar from './components/sticky-bar/Sticky-bar.jsx';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './screens/home/Home.jsx';
import Products from './screens/products/products.jsx';
import FlashSaleProducts from './screens/flash-sale-products/flash-sale-products.jsx';
import './App.css';


const App = () => {
    return (
        <>
            <StickBar />
            <Header>

            </Header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='flash-sale-products' element={<FlashSaleProducts />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App