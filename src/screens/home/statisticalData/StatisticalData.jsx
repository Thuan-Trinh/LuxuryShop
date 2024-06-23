import React from 'react';
import serviceCardList from './ServiceCardList.js';
import ServiceCard from './ServiceCard.jsx';
import dataDetailList from './dataDetailList'
import DataDetail from './DataDetail.jsx';
import './StatisticalData.css';
const StatisticalData = () => {
    return (
        <section id="statistical-data" >
            <div className='statistical-data'>
                <div className="service-list">
                    {serviceCardList.map((item) => (
                        <ServiceCard
                            key={item.id}
                            image={item.image}
                            title={item.title}
                            detail={item.detail}
                        />
                    ))}
                </div>
                <div className="data">
                    {
                        dataDetailList.map((item) => (
                            <DataDetail
                                key={item.id}
                                number={item.number}
                                detail={item.detail}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default StatisticalData