import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, color, size, quantity) => {
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(
                item => item.product.id === product.id && item.color === color && item.size === size
            );
            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += quantity;
                return updatedCart;
            } else {
                return [...prevCart, { product, color, size, quantity }];
            }
        });
    };
    const increaseQuantity = (productId, color, size, stock) => {
        setCart(prevCart => {
            return prevCart.map(item => {
                if (item.product.id === productId && item.color === color && item.size === size) {
                    return {
                        ...item,
                        quantity: item.quantity < stock ? item.quantity + 1 : item.quantity,
                    };
                }
                return item;
            });
        });
    };

    const decreaseQuantity = (productId, color, size) => {
        setCart(prevCart => {
            return prevCart
                .map(item => {
                    if (item.product.id === productId && item.color === color && item.size === size) {
                        return {
                            ...item,
                            quantity: item.quantity > 1 ? item.quantity - 1 : 1,
                        };
                    }
                    return item;
                })
                .filter(item => item.quantity > 0);
        });
    };

    const removeFromCart = (productId, color, size) => {
        setCart(prevCart => prevCart.filter(
            item => !(item.product.id === productId && item.color === color && item.size === size)
        ));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};
