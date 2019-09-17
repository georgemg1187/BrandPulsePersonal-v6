import React from 'react';
import PropTypes from 'prop-types'

const DropDownItem = ({children, value, id, className, style, onClick}) => {
    
    const classList = (`dropdown-item ${className}`).trim();
    
    return (
        <button value={value} id={id} className={classList} style={style} onClick={onClick}>{children}</button>
    )
}

DropDownItem.protoTypes = {
    value: PropTypes.string,
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func
}

DropDownItem.defaultProps = {
    className: '',
    style: {}
}

export default DropDownItem;
