import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, id, className, type, style={}, onClick, disabled}) => {

    const classList = (`btn ${className}`).trim();

    return (
        <button 
            id={id} 
            className={classList}
            type={type} 
            style={style}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}

Button.defaultProps = {
    className: '',
    type: 'button',
    style: {},
    disabled: false
}

export default Button
