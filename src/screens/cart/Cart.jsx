import React, { useContext, useState } from 'react';
import Banner from '../../components/shopBanner/Banner';
import SectionTitle from '../home/homeSection/SectionTitle';
import { CartContext } from '../../CartContext';
import icDelete from '../../../public/assets/images/ic-delete.svg';
import Address from './address';
import './cart.css';

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const parsePrice = (priceString) => {
        return parseFloat(priceString.replace(/[^\d]/g, ''));
    };

    const totalPrice = cart.reduce((total, item) => {
        const itemPrice = parsePrice(item.product.realPrice);
        return total + itemPrice * item.quantity;
    }, 0);


    return (
        <div>
            <div className="banner">
                <Banner />
            </div>
            <SectionTitle
                sectionTitle='newArrivals'
                bigTitle='GIỎ HÀNG CỦA BẠN'
                littleTitle='Vui lòng điền thông tin giao hàng và kiểm tra trước khi xác nhận đơn hàng!'
                smallTitle='smallTitle'
            />
            <Address />
            <div className="container">
                <div className="cartDetail">
                    <span className='packageDetail'>Thông tin đơn hàng:</span>
                    <div className="productsInCart">
                        <div className="product-in-cart">
                            {cart.length === 0 ? (
                                <p className='nothingInCart'>Giỏ hàng của bạn đang trống!</p>
                            ) : (
                                cart.map((item) => {
                                    const stock = item.product.productStock.find(stockItem =>
                                        stockItem.color === item.color
                                    ).store.find(storeItem =>
                                        storeItem.size === item.size
                                    ).stock;

                                    const key = `${item.product.id}-${item.color}-${item.size}`;

                                    return (
                                        <div key={key} className="cart-item">
                                            <img src={item.product.productImage[0]} alt={item.product.productName} className='thumbnail' />
                                            <div className="cart-item-details">
                                                <div className="name-and-size">
                                                    <p className='productName'>{item.product.productName}</p>
                                                    <div className="size-and-color">
                                                        <p>Size: {item.size}</p>
                                                        <p>Màu: {item.color}</p>
                                                    </div>
                                                </div>
                                                <p className='productPrice'>Giá: {(parsePrice(item.product.realPrice)).toLocaleString('vi-VN')} VND</p>
                                            </div>
                                            <div className="functions">
                                                <img src={icDelete} alt="ic-delete" onClick={() => removeFromCart(item.product.id, item.color, item.size)} />
                                                <div className="quantity-control">
                                                    <img src="../assets/images/ic-minus.svg" alt="" onClick={() => decreaseQuantity(item.product.id, item.color, item.size)} />
                                                    <span className='item-quantity'>{item.quantity}</span>
                                                    <img src="../assets/images/ic-add.svg" alt="" onClick={() => increaseQuantity(item.product.id, item.color, item.size, stock)} />
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                        {cart.length === 0 ? (
                            ''
                        ) :
                        //làm css phần tổng kết đơn hàng
                            (<div className="cart-sumary">
                                <span>Tổng kết đơn hàng</span>
                                <p>
                                    Tổng tiền: {totalPrice.toLocaleString('vi-VN')} VND
                                </p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart