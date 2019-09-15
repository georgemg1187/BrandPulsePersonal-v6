import React from 'react';
import PropTypes from 'prop-types'

const Row = ({children, className, style}) => {
    
    const classList = (`row ${className}`).trim();

    return (
        <div className={classList} style={style}>
            {children}
        </div>
    )
}

Row.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
}

Row.defaultProps = {
    className: '',
    style: {}
}

export default Row
