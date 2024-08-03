import React, { useContext, useEffect, useMemo, useState } from 'react';
import Banner from '../../components/shopBanner/Banner';
import SectionTitle from '../home/homeSection/SectionTitle';
import { CartContext } from '../../CartContext';
import icDelete from '../../../public/assets/images/ic-delete.svg';
import Address from './address';
import './cart.css';

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart, addressInfo } = useContext(CartContext);
    console.log(cart.length);
    const parsePrice = (priceString) => {
        return parseFloat(priceString.replace(/[^\d]/g, ''));
    };

    const totalPrice = useMemo(() => cart.reduce((total, item) => {
        const itemPrice = parsePrice(item.product.realPrice);
        return total + itemPrice * item.quantity;
    }, 0), [cart]);

    const voucherDiscount = useMemo(() => cart.reduce((total, item) => {
        const itemRealPrice = parsePrice(item.product.realPrice);
        const itemFakePrice = parsePrice(item.product.fakePrice);
        return total + (itemFakePrice - itemRealPrice) * item.quantity;
    }, 0), [cart]);

    const totalQuantity = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);
    const [comboVoucher2, setComboVoucher2] = useState(0);
    const [comboVoucher3, setComboVoucher3] = useState(0);
    
    useEffect(() => {
        if (totalQuantity === 2) {
            setComboVoucher2(totalPrice * 0.05);
        } else {
            setComboVoucher2(0);
        }
        
        if (totalQuantity >= 3) {
            setComboVoucher3(totalPrice * 0.08);
        } else {
            setComboVoucher3(0);
        }
    }, [totalQuantity, totalPrice]);
    
    const [shippingFee, setShippingFee] = useState('Free');
    useEffect(()=>{
        if (addressInfo.province !== '79'){
            setShippingFee("25.000 VND")
        }else{
            setShippingFee("0 VND")
        }
    },[addressInfo.province])

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
                        {cart.length === 0 ? (
                            <p className='nothingInCart'>Giỏ hàng của bạn đang trống!</p>
                        ) : (
                            <div className="product-in-cart">
                                {cart.map((item) => {
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
                                                <p className='productPrice'>{(parsePrice(item.product.realPrice)).toLocaleString('vi-VN')} VND</p>
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
                                })}
                            </div>
                        )}
                        {cart.length === 0 ? (
                            ''
                        ) :
                            //làm css phần tổng kết đơn hàng
                            (<div className="cart-sumary">
                                <span className='sumaryTitle'>Tổng kết đơn hàng</span>
                                <div className='money-calculate'>
                                    <div className='sum'>
                                        <span className='subTitle'>Tổng tiền:</span>
                                        <span>{totalPrice.toLocaleString('vi-VN')} VND</span>
                                    </div>
                                    <div className='voucher'>
                                        <span className='subTitle'>Giảm giá:</span>
                                        <span>- {voucherDiscount.toLocaleString('vi-VN')} VND</span>
                                    </div>
                                    <div className='voucherCombo'>
                                        <span className='subTitle'>Giảm giá combo:</span>
                                        <div className="comboProducts">
                                            <span className='combboTitle'>02 SP trở lên (-5%): </span>
                                            <span>- {comboVoucher2.toLocaleString('vi-VN')} VND</span>
                                        </div>
                                        <div className="comboProducts">
                                            <span className='combboTitle'>03 SP trở lên (-8%): </span>
                                            <span>- {comboVoucher3.toLocaleString('vi-VN')} VND</span>
                                        </div>
                                    </div>
                                    <div className="voucherShipping">
                                        <span className='subTitle'>Phí vận chuyển: </span>
                                        <span>{shippingFee}</span>
                                    </div>
                                    <div className="subTotal">
                                        <span>Tổng: </span>
                                        <span>{(totalPrice - comboVoucher2 - comboVoucher3 + parsePrice(shippingFee)).toLocaleString('vi-VN')}VND</span>
                                    </div>
                                </div>
                                <button className='buy-now'>Đặt hàng ngay</button>
                                <span className='title'>Hoặc chọn phương thức mua khác</span>
                                <div className="buying-method">
                                    <button className="buy-online">Mua qua sàn TMĐT</button>
                                    <button className="direct-contact">Liên hệ trực tiếp</button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart