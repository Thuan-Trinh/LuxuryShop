import { useContext, useState, useEffect } from "react";
import axios from 'axios';
import './address.css';
import { CartContext } from "../../CartContext";

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

const Address = () => {
    const { addressInfo, setAddressInfo } = useContext(CartContext);
    const [districtList, setDistrictList] = useState([]);
    const [communeList, setCommuneList] = useState([]);
    const [districtValue, setDistrictValue] = useState(addressInfo.district || "0");
    const [communeValue, setCommuneValue] = useState(addressInfo.commune || "0");
    const [provinceValue, setProvinceValue] = useState(addressInfo.province || "0");
    const [isLoadingDistrict, setIsLoadingDistrict] = useState(false);
    const [isLoadingCommune, setIsLoadingCommune] = useState(false);

    useEffect(() => {
        if (provinceValue && provinceValue !== "0") {
            (async () => {
                setIsLoadingDistrict(true);
                const districts = await getDistrict(provinceValue);
                setDistrictList(districts);
                setIsLoadingDistrict(false);
            })();
        } else {
            setDistrictList([]);
            setCommuneList([]);
        }
    }, [provinceValue]);

    useEffect(() => {
        if (districtValue && districtValue !== "0") {
            (async () => {
                setIsLoadingCommune(true);
                const communes = await getCommune(districtValue);
                setCommuneList(communes);
                setIsLoadingCommune(false);
            })();
        } else {
            setCommuneList([]);
        }
    }, [districtValue]);

    const handleChangeProvince = (event) => {
        const value = event.target.value;
        setProvinceValue(value);
        setDistrictValue("0");
        setCommuneValue("0");
        setAddressInfo(prev => ({
            ...prev,
            province: value,
            district: "0",
            commune: "0"
        }));
    };

    const handleChangeDistrict = (event) => {
        const value = event.target.value;
        setDistrictValue(value);
        setCommuneValue("0");
        setAddressInfo(prev => ({
            ...prev,
            district: value,
            commune: "0"
        }));
    };

    const handleChangeCommune = (event) => {
        const value = event.target.value;
        setCommuneValue(value);
        setAddressInfo(prev => ({
            ...prev,
            commune: value
        }));
    };

    const handleSaveAddress = () => {
        const updatedAddressInfo = {
            ...addressInfo,
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            province: provinceValue,
            district: districtValue,
            commune: communeValue,
        };
        setAddressInfo(updatedAddressInfo);
        alert("Thông tin giao hàng đã được lưu!");
    };

    return (
        <div className="container">
            <div className="delivery">
                <span className="bigTitle">Thông tin giao hàng:</span>
                <div className="name-and-phone">
                    <div className="form">
                        <span>Người nhận hàng:</span>
                        <input
                            id="name"
                            type="text"
                            placeholder='Tên người nhận'
                            defaultValue={addressInfo.name}
                        />
                    </div>
                    <div className="form">
                        <span>Số điện thoại nhận hàng:</span>
                        <input
                            id="phone"
                            type="tel"
                            name="phone"
                            placeholder="Số điện thoại"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                            defaultValue={addressInfo.phone}
                        />
                    </div>
                </div>
                <div className="form">
                    <span>Địa chỉ nhận hàng:</span>
                    <div className="customer-address">
                        <input
                            id="address"
                            type="text"
                            placeholder='Số nhà, đường, thôn'
                            defaultValue={addressInfo.address}
                        />
                        <div className="select-item">
                            <select id="city-province" onChange={handleChangeProvince} value={provinceValue}>
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
                            <select
                            id="district-town"
                            value={districtValue}
                            onChange={handleChangeDistrict}
                            >
                                <option value="0">&nbsp;Chọn Quận/Huyện...</option>
                                {districtList.map((district) => (
                                    <option key={district.idDistrict} value={district.idDistrict}>
                                        &nbsp;{district.name}
                                    </option>
                                ))}
                            </select>

                            {isLoadingDistrict && (
                                <span className="loading">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/qtv-music-shop.appspot.com/o/loading-icon%2Floading-icon-small.gif?alt=media&token=769f1086-0302-4e17-852e-e1409ec215b4"
                                        alt="loading-icon"
                                    />
                                </span>
                            )}
                        </div>
                        <div className="select-item ward-commune-select">
                            <select id="ward-commune" value={communeValue} onChange={handleChangeCommune}>
                                <option value="0">&nbsp;Chọn Phường/Xã...</option>
                                {communeList.map((commune) => (
                                    <option key={commune.idCommune} value={commune.idCommune}>
                                        &nbsp;{commune.name}
                                    </option>
                                ))}
                            </select>

                            {isLoadingCommune && (
                                <span className="loading">
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/qtv-music-shop.appspot.com/o/loading-icon%2Floading-icon-small.gif?alt=media&token=769f1086-0302-4e17-852e-e1409ec215b4"
                                        alt="loading-icon"
                                    />
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className="button">
                    <button onClick={handleSaveAddress}>Lưu thông tin nhận hàng</button>
                </div>
            </div>
        </div>
    )
}

export default Address
