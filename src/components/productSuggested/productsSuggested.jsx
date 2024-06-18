import React from 'react';
import { useState, useEffect } from 'react';
import ProductCard from '../../screens/home/homeSection/ProductCard';
import products from '../../screens/home/homeSection/productsArray';
import './products-suggest.css'

const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
const ProductsSuggested = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);

    useEffect(() => {
        const shuffledProducts = shuffleArray([...products]).slice(0, 4);
        setSelectedProducts(shuffledProducts);
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='productSuggested'>
            <h3>CÓ THỂ BẠN CŨNG THÍCH</h3>
            <div className='product-list container'>
                {selectedProducts.map((card) => (
                    <ProductCard
                        {...card}
                        key={card.id}
                        productImage={card.productImage[0]}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductsSuggested
