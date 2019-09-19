import React from 'react'
import PropTypes from 'prop-types'

const FormInput = ({id, className, style, type, version, name, placeholder, value, onChange, checked, disabled}) => {

    const classList = (`${version} ${className}`).trim();

    return (
        <input 
            id={id} 
            className={classList}
            style={style}
            type={type} 
            name={name} 
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            checked={checked}
            disabled={disabled}
        />
    )
}

FormInput.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.string,
    version: PropTypes.oneOf(['custom-control-input', 'form-control']).isRequired,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
}

FormInput.defaultProps = {
    className: '',
    version: 'form-control',
    name: '',
    placeholder: '',
    checked: false,
    disabled: false
}

export default FormInput;
