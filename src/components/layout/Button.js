import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, id, className, type, style={}, onClick, onSubmit}) => {

    const classList = (`btn ${className}`).trim();

    return (
        <button 
            id={id} 
            className={classList}
            type={type} 
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    style: PropTypes.object
}

Button.defaultProps = {
    className: '',
    type: 'button',
    style: {}
}

export default Button
