import React from 'react';

const SectionTitle = (props) => {
    const { sectionTitle, bigTitle, smallTitle, littleTitle } = props;
    return (
        <div className={sectionTitle}>
            <span className='bigTitle'>{bigTitle}</span>
            <span className={smallTitle}>{littleTitle}</span>
        </div>
    )
}

export default SectionTitle