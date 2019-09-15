import React from 'react';
import PropTypes from 'prop-types'

const Col = ({children, version, className, style}) => {

    const classList = (`${version} ${className}`).trim();

    return (
        <div className={classList} style={style}>
            {children}
        </div>
    )
}

Col.propTypes = {
    className: PropTypes.string,
    version: PropTypes.string,
    style: PropTypes.object
}

Col.defaultProps = {
    className: '',
    version: 'col',
    style: {}
}

export default Col
