import React, { useContext } from 'react';
import Banner from '../../components/shopBanner/Banner';
import SectionTitle from '../home/homeSection/SectionTitle';
import { CartContext } from '../../CartContext';
import icDelete from '../../../public/assets/images/ic-delete.svg'

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
            <Banner />
            <SectionTitle
                sectionTitle='newArrivals'
                bigTitle='GIỎ HÀNG CỦA BẠN'
                littleTitle='Vui lòng điền thông tin giao hàng và kiểm tra trước khi xác nhận đơn hàng!'
                smallTitle='smallTitle'
            />
            <div className="delivery">
                <span>Thông tin giao hàng:</span>
                <div className="customer-infor">
                    <div className="form">
                        <span>Người nhận hàng:</span>
                        <input type="text" placeholder='Tên người nhận' />
                    </div>
                    <div className="form">
                        <span>Số điện thoại nhận hàng:</span>
                        <input type="text" placeholder='Số điện thoại' />
                    </div>
                    <div className="form">
                        <span>Địa chỉ nhận hàng:</span>
                        <input type="text" placeholder='Số nhà, đường, thôn' />
                        <input type="text" placeholder='Xã / Phường' />
                        <input type="text" placeholder='Quận / Huyện' />
                        <input type="text" placeholder='Tỉnh / Thành phố' />
                    </div>
                </div>
            </div>
            <span>Thông tin đơn hàng:</span>
            <div className="product-in-cart">
                {cart.length === 0 ? (
                    <p>Giỏ hàng của bạn đang trống</p>
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
                                <img src={item.product.productImage[0]} alt={item.product.productName} />
                                <div className="cart-item-details">
                                    <p>{item.product.productName}</p>
                                    <p>Size: {item.size}</p>
                                    <p>Màu: {item.color}</p>
                                    <p>Giá: {(parsePrice(item.product.realPrice)).toLocaleString('vi-VN')} VND</p>
                                    <img src={icDelete} alt="ic-delete" onClick={() => removeFromCart(item.product.id, item.color, item.size)} />
                                    <div className="quantity-control">
                                        <button onClick={() => decreaseQuantity(item.product.id, item.color, item.size)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => increaseQuantity(item.product.id, item.color, item.size, stock)}>+</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
            <div className="cart-sumary">
                <span>Tổng kết đơn hàng</span>
                <p>
                    Tổng tiền: {totalPrice.toLocaleString('vi-VN')} VND
                </p>
            </div>
        </div>
    )
}

export default Cart