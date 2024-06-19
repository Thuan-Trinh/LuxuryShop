import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StickBar from './components/sticky-bar/Sticky-bar.jsx';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './screens/home/Home.jsx';
import Products from './screens/products/products.jsx';
import FlashSaleProducts from './screens/flash-sale-products/flash-sale-products.jsx';
import NewArrivals from './screens/new-arrivals/new-arrivals.jsx';
import TopSell from './screens/top-sell/top-sell.jsx';
import Contacts from './screens/contacts/Contacts.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
    return (
        <>
            <StickBar />
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='flash-sale-products' element={<FlashSaleProducts />} />
                <Route path='new-arrivals' element={<NewArrivals />} />
                <Route path='top-sell' element={<TopSell />} />
                <Route path='/contacts' element={<Contacts />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App