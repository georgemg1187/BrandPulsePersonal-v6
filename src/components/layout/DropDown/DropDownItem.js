import React from 'react';
import PropTypes from 'prop-types'

const DropDownItem = ({children, id, className, style}) => {
    
    const classList = (`dropdown-item ${className}`).trim();
    
    return (
        <button id={id} className={classList} style={style}>{children}</button>
    )
}

DropDownItem.protoTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

DropDownItem.defaultProps = {
    className: '',
    style: {}
}

export default DropDownItem;
