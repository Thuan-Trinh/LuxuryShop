import React from 'react';
import Banner from '../../components/shopBanner/Banner';
import SectionTitle from '../home/homeSection/SectionTitle';
import AccordionFAQ from './accordion';
import './contact.css';

const Contacts = () => {
    return (
        <div>
            <div className="banner">
                <Banner />
            </div>
            <div className="contactInfor">
                <SectionTitle
                    sectionName='topProducts'
                    sectionTitle='topSeller'
                    bigTitle='THÔNG TIN LIÊN HỆ'
                    littleTitle='Hãy liên hệ ngay với Shop để được hỗ trợ 24/7'
                    smallTitle='smallTitle'
                />
                <div className="container">
                    <div className="app">
                        <img src="../../assets/images/zalo.svg" alt="Zalo" />
                        <span>Zalo</span>
                    </div>
                    <div className="app">
                        <img src="../../assets/images/messenger.svg" alt="Messenger" />
                        <span>Messenger</span>
                    </div>
                    <div className="app">
                        <img src="../../assets/images/skype.svg" alt="Skype" />
                        <span>Skype</span>
                    </div>
                    <div className="app">
                        <img src="../../assets/images/telegram.svg" alt="Telegram" />
                        <span>Telegram</span>
                    </div>
                </div>
            </div>
            <div className="FAQ">
                <SectionTitle
                    sectionName='topProducts'
                    sectionTitle='topSeller'
                    bigTitle='CÂU HỎI THƯỜNG GẶP'
                    littleTitle='Tham khảo các câu hỏi có thể bạn cũng thắc mắc!'
                    smallTitle='smallTitle'
                />
                <div className="container">
                    <AccordionFAQ />
                </div>
            </div>
        </div>
    )
}

export default Contacts