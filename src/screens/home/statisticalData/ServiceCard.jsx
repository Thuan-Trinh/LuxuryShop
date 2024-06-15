import React from 'react';
const ServiceCard = (props) => {
    return (
        <div className="service-card">
            <img src={props.image} alt={props.image} />
            <div className="service-detail">
                <span>{props.title}</span>
                <span>{props.detail}</span>
            </div>
        </div>
    )
}

export default ServiceCard;