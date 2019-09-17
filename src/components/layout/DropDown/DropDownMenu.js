import React from 'react';
import PropTypes from 'prop-types'

const DropDownMenu = ({children, id, className, style}) => {
    
    const classList = (`dropdown-menu ${className}`).trim();
    
    return (
        <div id={id} className={classList} style={style}>
            {children}
        </div>
    )
}

DropDownMenu.protoTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

DropDownMenu.defaultProps = {
    className: '',
    style: {}
}

export default DropDownMenu
