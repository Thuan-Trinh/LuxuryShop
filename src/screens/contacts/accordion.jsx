import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

function AccordionFAQ() {
    return (
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Shop có Free Ship không?</Accordion.Header>
                <Accordion.Body>
                    Hiện tại với hình thức mua online qua website, Shop có chính sách FreeShip
                    đối với đơn hàng nội thành Thành Phố Hồ Chí Minh và đồng giá ship 25k toàn
                    quốc. Khách có thể chọn hình thức mua qua các sàn thương mại điện tử online
                    để được hưởng nhiều ưu đãi voucher giảm giá vận chuyển từ sàn.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Mấy ngày thì nhận được dép thế Shop?</Accordion.Header>
                <Accordion.Body>
                    Với đơn ở nội thành Hồ Chí Minh, sản phẩm có thể đến tay Khách hàng sau tối
                    đa 2-3 ngày. Đối với các đơn hàng ở tỉnh thành khác thì tối đa 7 ngày sẽ được
                    giao tới khách hàng. Lưu ý thời gian giao hàng có thể kéo dài nếu trùng vào
                    ngày lễ, tết trong năm.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Dép đi không vừa có thể đổi được không?</Accordion.Header>
                <Accordion.Body>
                    Shop có hỗ trợ khách hàng đổi sản phẩm nếu đặt nhầm size hoặc không ưng ý.
                    Tuy nhiên sản phẩm phải được đảm bảo còn nguyên, chưa được sử dụng. Shop
                    khuyến khích khách hàng nên quay lại video hoặc chụp hình ảnh khi nhận và
                    mở sản phẩm để được hỗ trợ tốt nhất. Chi phí đổi hàng Shop và khách sẽ
                    chia 50:50
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Có bảo hành không Shop?</Accordion.Header>
                <Accordion.Body>
                    Chính sách bảo hành của Shop đối với các sản phẩm là 6 ngày kể từ ngày nhận
                    sản phẩm nếu có lỗi từ phía Shop, ví dụ: Shop giao nhầm sản phẩm, nhầm size,
                    màu, v.v.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>Chính sách đổi trả thế nào vậy Shop?</Accordion.Header>
                <Accordion.Body>
                    Shop có hỗ trợ đổi trả với các đơn hàng nếu sản phẩm không ưng ý hoặc có nhu
                    cầu đổi từ phía khách hàng. Yêu cầu là sản phẩm còn nguyên chưa qua sử dụng
                    và giới hạn tối đa 3 ngày kể từ khi nhận hàng. Ưu tiên các đơn hàng ở khu vực
                    Miền Nam.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionFAQ;