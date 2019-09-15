import React from 'react'
import PropTypes from 'prop-types';

const CardHeader = ({children, id, className, style}) => {
    
    const classList = (`card-header $className}`).trim();
    
    return (
        <div id={id} className={classList} style={style}>
            {children}
        </div>
    )
}

CardHeader.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

CardHeader.defaultProps = {
    className: '',
    style: {}
}

export default CardHeader
