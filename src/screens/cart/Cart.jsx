import React, { useContext, useState } from 'react';
import Banner from '../../components/shopBanner/Banner';
import SectionTitle from '../home/homeSection/SectionTitle';
import { CartContext } from '../../CartContext';
import icDelete from '../../../public/assets/images/ic-delete.svg'
import axios from 'axios';

const apiUrl = "https://vietnam-administrative-division-json-server-swart.vercel.app";
const apiEndpointDistrict = apiUrl + "/district/?idProvince=";
const apiEndpointCommune = apiUrl + "/commune/?idDistrict=";

async function getDistrict(idProvince) {
    try {
        const { data: districtList } = await axios.get(apiEndpointDistrict + idProvince);
        return districtList;
    } catch (error) {
        console.error("Error fetching districts:", error);
        // Handle error (e.g., set error state, show message)
        return [];
    }
}

async function getCommune(idDistrict) {
    try {
        const { data: communeList } = await axios.get(apiEndpointCommune + idDistrict);
        return communeList;
    } catch (error) {
        console.error("Error fetching communes:", error);
        // Handle error (e.g., set error state, show message)
        return [];
    }
}

const Cart = () => {
    const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
    const parsePrice = (priceString) => {
        return parseFloat(priceString.replace(/[^\d]/g, ''));
    };

    const totalPrice = cart.reduce((total, item) => {
        const itemPrice = parsePrice(item.product.realPrice);
        return total + itemPrice * item.quantity;
    }, 0);

    const [districtList, setDistrictList] = useState([]);
    const [communeList, setCommuneList] = useState([]);
    const [districtValue, setDistrictValue] = useState(0);
    const [communeValue, setCommuneValue] = useState(0);
    const [isLoadingDistrict, setIsLoadingDistrict] = useState(false);
    const [isLoadingCommune, setIsLoadingCommune] = useState(false);
    const handleChangeProvince = async (event) => {
        const value = event.target.value;
        if (value === "0") {
            setDistrictList([]);
            setCommuneList([]);
            setDistrictValue("0");
            setCommuneValue("0");
            return;
        }
        setIsLoadingDistrict(true);
        const districtList = await getDistrict(value);
        setDistrictList(districtList);
        setIsLoadingDistrict(false);
    };
    const handleChangeDistrict = async (event) => {
        const value = event.target.value;
        setDistrictValue(value);
        if (value === "0") {
            setCommuneList([]);
            setCommuneValue("0");
        } else {
            setIsLoadingCommune(true);
            const communeList = await getCommune(value);
            setCommuneList(communeList);
            setIsLoadingCommune(false);
        }
    };
    const handleChangeCommune = (event) => {
        setCommuneValue(event.target.value);
    };

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
                        <div className="select-item">
                            <label htmlFor="city-province">Tỉnh/Thành Phố :</label>
                            <select id="city-province" onChange={handleChangeProvince}>
                                <option value="0">&nbsp;Chọn Tỉnh/Thành Phố...</option>
                                <option value="01">&nbsp;Thành phố Hà Nội</option>
                                <option value="79">&nbsp;Thành phố Hồ Chí Minh</option>
                                <option value="31">&nbsp;Thành phố Hải Phòng</option>
                                <option value="48">&nbsp;Thành phố Đà Nẵng</option>
                                <option value="92">&nbsp;Thành phố Cần Thơ</option>
                                <option value="02">&nbsp;Tỉnh Hà Giang</option>
                                <option value="04">&nbsp;Tỉnh Cao Bằng</option>
                                <option value="06">&nbsp;Tỉnh Bắc Kạn</option>
                                <option value="08">&nbsp;Tỉnh Tuyên Quang</option>
                                <option value="10">&nbsp;Tỉnh Lào Cai</option>
                                <option value="11">&nbsp;Tỉnh Điện Biên</option>
                                <option value="12">&nbsp;Tỉnh Lai Châu</option>
                                <option value="14">&nbsp;Tỉnh Sơn La</option>
                                <option value="15">&nbsp;Tỉnh Yên Bái</option>
                                <option value="17">&nbsp;Tỉnh Hoà Bình</option>
                                <option value="19">&nbsp;Tỉnh Thái Nguyên</option>
                                <option value="20">&nbsp;Tỉnh Lạng Sơn</option>
                                <option value="22">&nbsp;Tỉnh Quảng Ninh</option>
                                <option value="24">&nbsp;Tỉnh Bắc Giang</option>
                                <option value="25">&nbsp;Tỉnh Phú Thọ</option>
                                <option value="26">&nbsp;Tỉnh Vĩnh Phúc</option>
                                <option value="27">&nbsp;Tỉnh Bắc Ninh</option>
                                <option value="30">&nbsp;Tỉnh Hải Dương</option>
                                <option value="33">&nbsp;Tỉnh Hưng Yên</option>
                                <option value="34">&nbsp;Tỉnh Thái Bình</option>
                                <option value="35">&nbsp;Tỉnh Hà Nam</option>
                                <option value="36">&nbsp;Tỉnh Nam Định</option>
                                <option value="37">&nbsp;Tỉnh Ninh Bình</option>
                                <option value="38">&nbsp;Tỉnh Thanh Hóa</option>
                                <option value="40">&nbsp;Tỉnh Nghệ An</option>
                                <option value="42">&nbsp;Tỉnh Hà Tĩnh</option>
                                <option value="44">&nbsp;Tỉnh Quảng Bình</option>
                                <option value="45">&nbsp;Tỉnh Quảng Trị</option>
                                <option value="46">&nbsp;Tỉnh Thừa Thiên Huế</option>
                                <option value="49">&nbsp;Tỉnh Quảng Nam</option>
                                <option value="51">&nbsp;Tỉnh Quảng Ngãi</option>
                                <option value="52">&nbsp;Tỉnh Bình Định</option>
                                <option value="54">&nbsp;Tỉnh Phú Yên</option>
                                <option value="56">&nbsp;Tỉnh Khánh Hòa</option>
                                <option value="58">&nbsp;Tỉnh Ninh Thuận</option>
                                <option value="60">&nbsp;Tỉnh Bình Thuận</option>
                                <option value="62">&nbsp;Tỉnh Kon Tum</option>
                                <option value="64">&nbsp;Tỉnh Gia Lai</option>
                                <option value="66">&nbsp;Tỉnh Đắk Lắk</option>
                                <option value="67">&nbsp;Tỉnh Đắk Nông</option>
                                <option value="68">&nbsp;Tỉnh Lâm Đồng</option>
                                <option value="70">&nbsp;Tỉnh Bình Phước</option>
                                <option value="72">&nbsp;Tỉnh Tây Ninh</option>
                                <option value="74">&nbsp;Tỉnh Bình Dương</option>
                                <option value="75">&nbsp;Tỉnh Đồng Nai</option>
                                <option value="77">&nbsp;Tỉnh Bà Rịa - Vũng Tàu</option>
                                <option value="80">&nbsp;Tỉnh Long An</option>
                                <option value="82">&nbsp;Tỉnh Tiền Giang</option>
                                <option value="83">&nbsp;Tỉnh Bến Tre</option>
                                <option value="84">&nbsp;Tỉnh Trà Vinh</option>
                                <option value="86">&nbsp;Tỉnh Vĩnh Long</option>
                                <option value="87">&nbsp;Tỉnh Đồng Tháp</option>
                                <option value="89">&nbsp;Tỉnh An Giang</option>
                                <option value="91">&nbsp;Tỉnh Kiên Giang</option>
                                <option value="93">&nbsp;Tỉnh Hậu Giang</option>
                                <option value="94">&nbsp;Tỉnh Sóc Trăng</option>
                                <option value="95">&nbsp;Tỉnh Bạc Liêu</option>
                                <option value="96">&nbsp;Tỉnh Cà Mau</option>
                            </select>
                        </div>
                        <div
                            className="select-item district-town-select"
                            onChange={handleChangeDistrict}
                        >
                            <label htmlFor="district-town">Quận/Huyện :</label>
                            <select id="district-town" value={districtValue} onChange={handleChangeDistrict}>
                                <option value="0">&nbsp;Chọn Quận/Huyện...</option>
                                {districtList.map((district) => (
                                    <option key={district.idDistrict} value={district.idDistrict}>
                                        &nbsp;{district.name}
                                    </option>
                                ))}
                            </select>

                            {isLoadingDistrict && (
                                <span>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/qtv-music-shop.appspot.com/o/loading-icon%2Floading-icon-small.gif?alt=media&token=769f1086-0302-4e17-852e-e1409ec215b4"
                                        alt="loading-icon"
                                    />
                                </span>
                            )}
                        </div>
                        <div className="select-item ward-commune-select">
                            <label htmlFor="ward-commune">Xã/Phường :</label>
                            <select id="ward-commune" value={communeValue} onChange={handleChangeCommune}>
                                <option value="0">&nbsp;Chọn Phường/Xã...</option>
                                {communeList.map((commune) => (
                                    <option key={commune.idCommune} value={commune.idCommune}>
                                        &nbsp;{commune.name}
                                    </option>
                                ))}
                            </select>

                            {isLoadingCommune && (
                                <span>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/qtv-music-shop.appspot.com/o/loading-icon%2Floading-icon-small.gif?alt=media&token=769f1086-0302-4e17-852e-e1409ec215b4"
                                        alt="loading-icon"
                                    />
                                </span>
                            )}
                        </div>
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