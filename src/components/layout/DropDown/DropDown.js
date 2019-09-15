import React from 'react';
import PropTypes from 'prop-types';

import DropDownToggle from './DropDownToggle';
import DropDownMenu from './DropDownMenu';
import DropDownItem from './DropDownItem';

const DropDown = ({children, id, className, style}) => {
    
    const classList = (`dropdown ${className}`).trim();
    
    return (
        <div id={id} className={classList} style={style}>
            {children}
        </div>
    )
}

DropDown.protoTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

DropDown.defaultProps = {
    className: '',
    style: {}
}

DropDown.Toggle = DropDownToggle;
DropDown.Menu = DropDownMenu;
DropDown.Item = DropDownItem;

export default DropDown;