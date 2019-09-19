import React from 'react';
import PropTypes from 'prop-types';

import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = ({children, id, className, style}) => {
    
    const classList = (`card mb-3 ${className}`).trim();
    
    return (
        <div id={id} className={classList} style={style}>
            {children}
        </div>
    )
}

Card.protoTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

Card.defaultProps = {
    className: '',
    style: {}
}

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card

