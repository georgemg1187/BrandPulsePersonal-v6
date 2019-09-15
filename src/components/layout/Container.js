import React from 'react';
import PropTypes from 'prop-types'

const Container = ({children, className, style}) => {

    const classList = (`container ${className}`).trim();

    return (
        <div className={classList} style={style}>
            {children}
        </div>
    )
}

Container.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
}

Container.defaultProps = {
    className: '',
    style: {}
}

export default Container
