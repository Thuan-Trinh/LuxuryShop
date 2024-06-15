import React from 'react'
const DataDetail = (props) => {
    return (
        <div className="data-detail">
            <span>{props.number}</span>
            <span>{props.detail}</span>
        </div>
    )
}

export default DataDetail