import React from 'react';
import { Routes, Route } from 'react-router-dom';
import StickBar from './components/sticky-bar/Sticky-bar.jsx';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './screens/home/Home.jsx';
import Products from './screens/products/products.jsx';
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
            </Routes>
            <Footer />
        </>
    )
}

export default App