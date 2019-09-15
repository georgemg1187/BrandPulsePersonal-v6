import React from 'react';
import PropTypes from 'prop-types';

const DropDownToggle = ({ children, id, className, style }) => {

    const classList = (`btn dropdown-toggle ${className}`).trim();

    return (
        <button
            id={id}
            className={classList}
            style={style}
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
        > {children}</button>
    )
}

DropDownToggle.protoTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object
}

DropDownToggle.defaultProps = {
    className: '',
    style: {}
}

export default DropDownToggle;