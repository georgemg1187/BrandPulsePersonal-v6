import React from 'react'
import PropTypes from 'prop-types'

const CardBody = ({children, id, className, style}) => {
    
    const classList = (`card-body ${className}`).trim();
    
    return (
        <div id={id} className={classList} style={style}>
            {children}
        </div>
    )
}

CardBody.protoTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

CardBody.defaultProps = {
    className: '',
    style: {}
}

export default CardBody
